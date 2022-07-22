import products from '#routes/products.routes.js';
import views from '#routes/views.routes.js';
import { PUBLIC_PATH, VIEWS_PATH } from '#utils/paths.js';
import express from 'express';

const expressApp = express();
// Middlewares
expressApp.use(express.json());
expressApp.use(express.static(PUBLIC_PATH));
// Set template
expressApp.set('views', VIEWS_PATH);
expressApp.set('view engine', 'ejs');
// Routes
expressApp.use('/api', products);
expressApp.use('/', views);

export default expressApp;
