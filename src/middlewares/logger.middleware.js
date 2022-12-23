import { ERROR_PATH } from '#utils/paths.js';
import pinoHttp from 'pino-http';
import uuid from 'uuid-random';

const httpLogger = pinoHttp({
    genReqId: () => uuid(),
    customLogLevel: (req, res, err) => {
        if (res.statusCode >= 500 || err) {
            return 'error';
        }
        return 'silent';
    },
    transport: {
        pipeline: [
            {
                target: 'pino-pretty',
                options: {
                    colorize: false,
                    levelFirst: true,
                    minimunLevel: 'error',
                    destination: ERROR_PATH,
                    translateTime: 'yyyy-mm-dd HH:MM:ss.1 o'
                }
            }
        ]
    }
});

export default httpLogger;
