import { Router } from 'express';

const socket = Router();

socket.get('/', (req, res) => {
    res.send();
});

export default socket;
