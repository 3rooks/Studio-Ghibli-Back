import { USERS } from '#dao/dao.js';
import passport from 'passport';
import local from 'passport-local';
import { compareHash, createHash } from './bcrypt.js';

const LocalStrategy = local.Strategy;

export const initPassport = () => {
    passport.use(
        'register',
        new LocalStrategy(
            { passReqToCallback: true },
            async (req, username, password, done) => {
                const { email } = req.body;

                if (!username || !email || !password)
                    return done(null, false, { error: 'Bad Request' });

                const userExists = await USERS.getByUsername(username);
                if (userExists) return done(null, false, { error: 'Conflict' });

                const newUser = {
                    username,
                    email,
                    password: createHash(password)
                };

                const results = await USERS.saveOne(newUser);

                return done(null, results);
            }
        )
    );

    passport.use(
        'login',
        new LocalStrategy(async (username, password, done) => {
            const user = await USERS.getByUsername(username);
            if (!user)
                return done(null, false, { error: 'Please register first' });

            const isValidPassword = compareHash(password, user);

            if (!isValidPassword) {
                return done(null, false, { error: 'Wrong email || password' });
            }

            return done(null, { user });
        })
    );

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser(async (user, done) => {
        const result = await USERS.getById(user._id);
        return done(null, result);
    });
};
