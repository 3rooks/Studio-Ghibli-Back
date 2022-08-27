import { Server } from 'socket.io';

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
                console.log(newMessage)
                socket.broadcast.emit();
                io.emit('allMessage', );
            } catch (err) {
                console.log(err);
            }
        });
    });
};

export default socketIo;
