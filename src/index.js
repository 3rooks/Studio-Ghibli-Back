import '#config/env.js';
import httpServer from '#config/http.js';
import socketIo from '#config/socket-io.js';

const bootstrap = () => {
    // Express && http config
    const APP_SERVER = httpServer.listen(process.env.PORT, () => {
        console.log(`listening on port: http://localhost:${process.env.PORT}`);
    });
    // Socket.io
    socketIo(APP_SERVER);
};

bootstrap();
