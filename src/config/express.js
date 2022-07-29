import express from 'express';
import products from '#routes/products.routes.js';
import user from '#routes/user.routes.js';
import views from '#routes/views.routes.js';
import socket from '#routes/sockets.routes.js';
import { PUBLIC_PATH, VIEWS_PATH } from '#utils/paths.js';

const expressApp = express();
// Middlewares
expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(express.static(PUBLIC_PATH));
// Set template
expressApp.set('views', VIEWS_PATH);
expressApp.set('view engine', 'ejs');
// Routes
expressApp.use('/api', products);
expressApp.use('/api/users', user);
expressApp.use('/', views);
expressApp.use('/socket-io', socket);

export default expressApp;
