import { Router } from 'express';

const user = Router();

user.post('/register', (req, res) => {
    res.send();
});

user.post('/login', (req, res) => {
    res.send();
});

user.get('/profile', (req, res) => {
    res.send();
});

user.patch('/update-data', (req, res) => {
    res.send();
});

user.patch('/update-email', (req, res) => {
    res.send();
});

user.patch('/update-password', (req, res) => {
    res.send();
});

user.delete('/unregister', (req, res) => {
    res.send();
});

export default user;
