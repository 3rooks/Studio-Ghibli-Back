import upload from '#config/multer.js';
import uuidV4 from '#lib/uuidRandom.js';
import Container from '#managers/container.js';
import { Router } from 'express';

const views = Router();

const MY_STORAGE = new Container();

views.get('/', async (req, res) => {
    const products = await MY_STORAGE.getAll();
    res.render('index', { products });
});

views.post('/', upload.single('img'), async (req, res) => {
    const { name, price } = req.body;
    const thumbnail = req.file.filename;

    const newProduct = {
        id: uuidV4(),
        name,
        price,
        thumbnail
    };

    await MY_STORAGE.addProduct(newProduct);
    res.redirect('/');
});

export default views;
