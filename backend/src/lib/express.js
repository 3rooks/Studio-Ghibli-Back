import swaggerDoc from '#middlewares/swagger.middleware.js';
import cartRoutes from '#routes/carts.routes.js';
import productRoutes from '#routes/products.routes.js';
import userRoutes from '#routes/users.routes.js';
import { PUBLIC_PATH } from '#utils/paths.js';
import cors from 'cors';
import express from 'express';
import swaggerUiExpress from 'swagger-ui-express';

const expressApp = express();

// Middlewares
expressApp.use(cors());
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.static(PUBLIC_PATH));
// Template engine
// expressApp.set('views', VIEWS_PATH);
// expressApp.set('view engine', 'ejs');

// logger
// expressApp.use((req, res, next) => {
//     httpLogger(req, res);
//     next();
// });

// handler error
expressApp.use((err, req, res, next) => {
    res.err = {
        message: err.message,
        stack: err.stack
    };
    next(err);
});
expressApp.use((err, req, res, next) => {
    return res.status(500).send(err.message);
});

expressApp.use(
    '/docs',
    swaggerUiExpress.serve,
    swaggerUiExpress.setup(swaggerDoc)
);
// Routes
expressApp.use('/api', userRoutes);
expressApp.use('/api', productRoutes);
expressApp.use('/api', cartRoutes);

export default expressApp;
