import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import sessions from '#routes/sessions.routes.js';
import products from '#routes/products.routes.js';
import carts from '#routes/carts.routes.js';
import views from '#routes/views.routes.js';
import tests from '#routes/tests.routes.js';
import posts from '#routes/posts.routes.js';
import { PUBLIC_PATH, VIEWS_PATH } from '#utils/paths.js';

const expressApp = express();
// Middlewares
expressApp.use(express.json());
expressApp.use(
    session({
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URL
        }),
        secret: 'secrets',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 60 * 1000
        }
    })
);
expressApp.use(express.urlencoded({ extended: false }));
expressApp.use(express.static(PUBLIC_PATH));
// Set template
expressApp.set('views', VIEWS_PATH);
expressApp.set('view engine', 'ejs');
// Routes
expressApp.use('/api', sessions);
expressApp.use('/api', products);
expressApp.use('/api', carts);
expressApp.use('/api', tests);
expressApp.use('/api', posts);
expressApp.use('/', views);

export default expressApp;
