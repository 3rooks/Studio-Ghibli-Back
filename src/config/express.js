import viewRoutes from '#routes/views.routes.js';
import { PUBLIC_PATH, VIEWS_PATH } from '#utils/paths.js';
import cors from 'cors';
import express from 'express';
// import { pinoHttp } from 'pino-http';
// import uuid from 'uuid-random';
import cartRoutes from '#routes/carts.routes.js';
import productRoutes from '#routes/products.routes.js';
import userRoutes from '#routes/users.routes.js';

const expressApp = express();
// const httpLogger = pinoHttp({
//     genReqId: () => uuid(),
//     transport: {
//         customLogLevel: (req, res) => {
//             if (res.statusCode < 400) return 'info';
//             return 'error';
//         },
//         pipeline: [
//             {
//                 target: 'pino-pretty',
//                 options: {
//                     levelFirst: true,
//                     // minimunLevel: 'error',
//                     destination: 1,
//                     translateTime: 'yyyy-mm-dd HH:MM:ss.1 o'
//                 }
//             }
//         ]
//     }
// });
// Middlewares
expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(express.static(PUBLIC_PATH));
// Template engine
expressApp.set('views', VIEWS_PATH);
expressApp.set('view engine', 'ejs');
// expressApp.use((req, res, next) => {
//     httpLogger(req, res);
//     next();
// });
// expressApp.use((err, req, res, next) => {
//     res.err = {
//         message: err.message,
//         stack: err.stack
//     };
//     next(err);
// });
// expressApp.use((err, req, res, next) => {
//     return res.status(500).send(err.message);
// });
// Routes
expressApp.use('/api', userRoutes);
expressApp.use('/api', productRoutes);
expressApp.use('/api', cartRoutes);
expressApp.use('/', viewRoutes);

export default expressApp;
