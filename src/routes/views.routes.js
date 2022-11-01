// import cloudinary from '#config/cloudinary.js';
// import upload from '#config/multer.js';
// import uuid from 'uuid-random';
import { Router } from 'express';
// import { unlink } from 'fs/promises';
import { PRODUCTS } from '#dao/dao.js';

const viewRoutes = Router();

viewRoutes.get('/', async (req, res) => {
    const result = await PRODUCTS.getAll();
    res.render('index', { results: result });
});

// viewRoutes.post('/', upload.single('img'), async (req, res) => {
//     // const { name, price } = req.body;
//     // const { path } = req.file;

//     // try {
//     //     const { url: thumbnail } = await cloudinary.v2.uploader.upload(path);
//     //     // await cloudinary.v2.uploader.destroy(public_id);
//     //     // cloudinary.v2.image("",{})
//     //     const newProduct = {
//     //         id: uuid(),
//     //         name,
//     //         price,
//     //         thumbnail
//     //     };
//     //     await MY_STORAGE.addProduct(newProduct);
//     //     await unlink(path);
//     // } catch (err) {
//     //     console.log(err);
//     //     res.json(err);
//     // }
//     // res.redirect('/');

//     try {
//         const { name, description, price, code, stock } = req.body;
//         const { path } = req.file;
//         const { url: thumbnail } = await cloudinary.v2.uploader.upload(path);

//         const toSend = {
//             id: uuid(),
//             name,
//             description,
//             price,
//             code,
//             stock,
//             thumbnail
//         };
//         await unlink(path);
//         console.log(toSend);
//         res.redirect('/');
//     } catch (err) {
//         console.log(err);
//     }
// });

viewRoutes.get('/register', (req, res) => {
    return res.render('forms/register-form');
});

viewRoutes.post('/register', (req, res) => {
    return res.redirect('/login');
});

viewRoutes.get('/login', (req, res) => {
    return res.render('forms/login-form');
});

viewRoutes.post('/login', (req, res) => {
    return res.redirect('/user-profile');
});

viewRoutes.get('/profile', (req, res) => {
    return res.render('pages/profile');
});

export default viewRoutes;
