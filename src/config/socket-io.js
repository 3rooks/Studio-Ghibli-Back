import { Server } from 'socket.io';

const socketIo = (server) => {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('new connection: ' + socket.id);

        const history = [];

        socket.on('message', async (data) => {
            const { message } = data;
            const newMessage = {
                id: socket.id,
                message
            };

            history.push(newMessage);
            socket.broadcast.emit();
            io.emit('allMessage', history);
        });
    });
};

export default socketIo;
