import { Router } from 'express';
import { USERS } from '#dao/dao.js';

const sessions = Router();

sessions.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password)
        return res.status(400).json({ error: 'Bad Request' });

    const userExists = await USERS.getByEmail(email);
    if (userExists) return res.status(409).json({ error: 'Conflict' });

    const newUser = {
        username,
        email,
        password
    };

    const results = await USERS.saveOne(newUser);
    res.status(201).json({ status: 'Created', results });
});

sessions.post('/login', async (req, res) => {
    const { session } = req;
    const { username, email, password } = req.body;

    const user = await USERS.getByEmail(email);
    if (!user) return res.json({ error: 'Please register first' });

    if (user.email === email && user.password === password) {
        session.user = {
            username,
            email,
            password
        };
        return res.json({ status: 'Connected', acc: session.user });
    }
    return res.json({ error: 'Wrong email || password' });
});

sessions.get('/current', (req, res) => {
    const { session } = req;
    if (!session.user) return res.json({ error: 'Please login first' });
    return res.json({ status: 'Currently Connected', acc: session.user });
});

sessions.post('/logout', (req, res) => {
    const { session } = req;
    session.destroy((err) => {
        if (!err)
            return res.json({ status: 'Disconnected', acc: 'Logged out' });
        return res.json({ error: 'Try again' });
    });
});

export default sessions;
