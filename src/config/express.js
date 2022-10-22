import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import sessions from '#routes/sessions.routes.js';
import products from '#routes/products.routes.js';
import carts from '#routes/carts.routes.js';
import views from '#routes/views.routes.js';
import tests from '#routes/tests.routes.js';
import posts from '#routes/posts.routes.js';
import { PUBLIC_PATH, VIEWS_PATH } from '#utils/paths.js';
import { initPassport } from './passport.js';
import passport from 'passport';
import info from '#routes/info.routes.js';
import random from '#routes/random.routes.js';
import { pinoHttp } from 'pino-http';
import uuid from 'uuid-random';

const expressApp = express();
const httpLogger = pinoHttp({
    genReqId: () => uuid(),
    transport: {
        customLogLevel: (req, res) => {
            if (res.statusCode < 400) return 'info';
            return 'error';
        },
        pipeline: [
            {
                target: 'pino-pretty',
                options: {
                    levelFirst: true,
                    // minimunLevel: 'error',
                    destination: 1,
                    translateTime: 'yyyy-mm-dd HH:MM:ss.1 o'
                }
            }
        ]
    }
});
// Middlewares
expressApp.use(express.json());
expressApp.use(
    session({
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URL
        }),
        secret: 'secrets',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 1000
        }
    })
);
initPassport();
expressApp.use(passport.initialize());
expressApp.use(passport.session());
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(express.static(PUBLIC_PATH));
expressApp.use((req, res, next) => {
    httpLogger(req, res);
    next();
});
expressApp.use((err, req, res, next) => {
    res.err = {
        message: err.message,
        stack: err.stack
    };
    next(err);
});
expressApp.use((err, req, res, next) => {
    return res.status(500).send(err.message);
});
// Set template
expressApp.set('views', VIEWS_PATH);
expressApp.set('view engine', 'ejs');
// Routes
expressApp.use('/api', sessions);
expressApp.use('/api', products);
expressApp.use('/api', carts);
expressApp.use('/api', tests);
expressApp.use('/api', posts);
expressApp.use('/api', info);
expressApp.use('/api', random);
expressApp.use('/', views);

export default expressApp;
