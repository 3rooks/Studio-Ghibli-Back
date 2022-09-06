import uuid from 'uuid-random';
import { USERS } from '#dao/dao.js';
import { Router } from 'express';

const users = Router();

users.get('/users', async (req, res) => {
    const results = await USERS.getAll();
    res.json({ results });
});

users.post('/users', async (req, res) => {
    const { username, email } = req.body;

    const newUser = {
        id: uuid(),
        username,
        email
    };

    const results = await USERS.saveOne(newUser);
    res.status(200).json({ results });
});

export default users;
