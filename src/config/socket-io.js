import { Server } from 'socket.io';
import db from './sqlite.js';

const socketIo = (server) => {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('new connection: ' + socket.id);

        socket.on('message', async (data) => {
            const { message: messages } = data;

            const newMessage = {
                id: socket.id,
                messages
            };

            try {
                await db('messages').insert(newMessage);
                const mss = await db('messages').select('*');
                socket.broadcast.emit();
                io.emit('allMessage', mss);
            } catch (err) {
                console.log(err);
            }
        });
    });
};

export default socketIo;
