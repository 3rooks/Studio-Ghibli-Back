import '#config/env.js';
import httpServer from '#config/http.js';

export const bootstrap = () => {
    // Express && http config
    httpServer.listen(process.env.PORT || 8080, () => {
        console.log(`listening on port: ${process.env.PORT}`);
    });
    // nest
};

bootstrap();
