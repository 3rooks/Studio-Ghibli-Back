import cloudinary from '#config/cloudinary.js';
import upload from '#config/multer.js';
import uuid from 'uuid-random';
import { Router } from 'express';
import { unlink } from 'fs/promises';

const views = Router();

views.get('/', async (req, res) => {
    res.render('index', {});
});

views.post('/', upload.single('img'), async (req, res) => {
    // const { name, price } = req.body;
    // const { path } = req.file;

    // try {
    //     const { url: thumbnail } = await cloudinary.v2.uploader.upload(path);
    //     // await cloudinary.v2.uploader.destroy(public_id);
    //     // cloudinary.v2.image("",{})
    //     const newProduct = {
    //         id: uuid(),
    //         name,
    //         price,
    //         thumbnail
    //     };
    //     await MY_STORAGE.addProduct(newProduct);
    //     await unlink(path);
    // } catch (err) {
    //     console.log(err);
    //     res.json(err);
    // }
    // res.redirect('/');

    try {
        const { name, description, price, code, stock } = req.body;
        const { path } = req.file;
        const { url: thumbnail } = await cloudinary.v2.uploader.upload(path);

        const toSend = {
            id: uuid(),
            name,
            description,
            price,
            code,
            stock,
            thumbnail
        };
        await unlink(path);
        console.log(toSend);
        res.redirect('/');
    } catch (err) {
        console.log(err);
    }
});

export default views;
