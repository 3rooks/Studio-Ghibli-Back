import '#config/env.js';
import httpServer from '#config/http.js';

const bootstrap = () => {
    httpServer.listen(process.env.PORT, () => {
        console.log(`listening in port ${process.env.PORT}`);
    });
};

bootstrap();
