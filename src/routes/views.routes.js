import cloudinary from '#config/cloudinary.js';
import upload from '#config/multer.js';
import Container from '#controllers/container.js';
import uuidV4 from '#lib/uuidRandom.js';
import { Router } from 'express';
import { unlink } from 'fs/promises';

const views = Router();

const MY_STORAGE = new Container();

views.get('/', async (req, res) => {
    const products = await MY_STORAGE.getAll();
    res.render('index', { products });
});

views.post('/', upload.single('img'), async (req, res) => {
    const { name, price } = req.body;
    const { path } = req.file;

    try {
        const { url: thumbnail } = await cloudinary.v2.uploader.upload(path);
        // await cloudinary.v2.uploader.destroy(public_id);
        // cloudinary.v2.image("",{})
        const newProduct = {
            id: uuidV4(),
            name,
            price,
            thumbnail
        };
        await MY_STORAGE.addProduct(newProduct);
        await unlink(path);
    } catch (err) {
        console.log(err);
        res.json(err);
    }
    res.redirect('/');
});

export default views;
