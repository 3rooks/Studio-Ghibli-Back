import '#config/env.js';
import httpServer from '#config/http.js';

export const bootstrap = () => {
    // Express && http config
    httpServer.listen(process.env.PORT || 8080, () => {
        console.log(`listening on port: http://localhost:${process.env.PORT}`);
    });
};

bootstrap();
