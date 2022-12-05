import pinoHttp from 'pino-http';
import uuid from 'uuid-random';

const httpLogger = pinoHttp({
    genReqId: () => uuid(),
    customLogLevel: (req, res) => {
        if (res.statusCode < 400) return 'info';
        return 'error';
    },
    transport: {
        pipeline: [
            {
                target: 'pino-pretty',
                options: {
                    levelFirst: true,
                    minimunLevel: 'error',
                    destination: 1,
                    translateTime: 'yyyy-mm-dd HH:MM:ss.1 o'
                }
            }
        ]
    }
});

export default httpLogger;
