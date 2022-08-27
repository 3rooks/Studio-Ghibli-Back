import uuidV4 from '#lib/uuidRandom.js';
import { Router } from 'express';
import { CARTS } from '#dao/dao.js';

const carts = Router();

carts.get('/carts', async (req, res) => {
    const results = await CARTS.getAll();
    return res.status(200).json({ results });
});

carts.get('/carts/:id', async (req, res) => {
    const results = await CARTS.getById(req.params.id);
    return res.status(200).json(results);
});

carts.post('/carts', async (req, res) => {
    const newCart = {
        id: uuidV4()
    };
    const results = await CARTS.saveOne(newCart);
    return res.status(201).json({ results });
});

carts.delete('/carts/:id', async (req, res) => {
    const results = await CARTS.deleteById(req.params.id);
    return res.status(202).json({ results });
});

carts.get('/carts/:id/products', async (req, res) => {
    const results = await CARTS.getByIdAndShowProducts(req.params.id);
    return res.status(200).json({ results });
});

carts.post('/carts/:id/products', async (req, res) => {
    // const { id, quantity } = req.body;
    // const newProduct = {
    //     product: id,
    //     quantity
    // };
    // const results = await CARTS.getByIdAndUpdateProducts(
    //     req.params.id,
    //     newProduct
    // );
    // return res.status(201).json({ results });
});

carts.delete('/carts/:idCart/products/:idProduct', async (req, res) => {
    // const { idCart, idProduct } = req.params;
    // const itemDeleted = await MY_CART.deleteProductInCart(idCart, idProduct);
    // if (itemDeleted === 'Cart not found')
    //     return res.status(404).json({ error: 'Cart not found' });
    // return res.status(202).json({ success: itemDeleted });
});

export default carts;
