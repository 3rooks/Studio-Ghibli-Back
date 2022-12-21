import { ERROR_PATH } from '#utils/paths.js';
import pinoHttp from 'pino-http';
import uuid from 'uuid-random';

const httpLogger = pinoHttp({
    genReqId: () => uuid(),
    customLogLevel: (req, res, err) => {
        if (res.statusCode >= 500) {
            return 'error';
        } else if (res.statusCode >= 400 && res.statusCode < 500) {
            return 'silent';
        } else if (res.statusCode >= 300 && res.statusCode < 400) {
            return 'silent';
        }
        return 'info';
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
