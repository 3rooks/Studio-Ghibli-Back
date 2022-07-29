import { Server } from 'socket.io';

const socketIo = (server) => {
    const io = new Server(server);

    io.on('connection', (socket) => {
        console.log('new connection: ' + socket.id);

        const history = [];

        socket.on('message', (data) => {
            const { message } = data;
            const newMessage = {
                userID: socket.id,
                message,
                date: new Date()
            };
            history.push(newMessage);
            socket.broadcast.emit();
            io.emit('allMessage', history);
        });
    });
};

export default socketIo;
