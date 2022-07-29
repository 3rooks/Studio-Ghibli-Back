import uuidV4 from '#lib/uuidRandom.js';
import Container from '#controllers/container.js';

import { Router } from 'express';

const MY_STORAGE = new Container();

const products = Router();

products.get('/products', async (req, res) => {
    const products = await MY_STORAGE.getAll();
    if (products.length === 0)
        return res.status(404).send({ error: 'Not products yet' });
    return res.json({ products });
});

products.get('/products/:id', async (req, res) => {
    const itemSearched = await MY_STORAGE.getById(req.params.id);
    if (itemSearched === 'Not Found')
        return res.status(404).send({ error: 'Product not found' });
    return res.json({ itemSearched });
});

products.post('/products', async (req, res) => {
    const { name, price, thumbnail } = req.body;

    const newProduct = {
        id: uuidV4(),
        name,
        price,
        thumbnail
    };

    const products = await MY_STORAGE.getAll();
    const item = products.find(
        (item) => item.name === name && item.price === price
    );

    if (!name || !price || !thumbnail)
        return res.status(400).send({ error: 'Bad request product' });

    if (item)
        return res
            .status(409)
            .send({ error: 'Conflict product already exists' });

    await MY_STORAGE.addProduct(newProduct);
    return res.json({ newProduct });
});

products.put('/products/:id', async (req, res) => {
    const patchItem = await MY_STORAGE.putById(req.params.id);
    const { name, price, thumbnail } = req.body;

    if (patchItem === 'Not Found')
        return res.status(404).send({ error: 'Product not found' });

    if (!name || !price || !thumbnail)
        return res
            .status(400)
            .send({ error: "Bad request can't patch the product" });

    patchItem.name = name;
    patchItem.price = price;
    patchItem.thumbnail = thumbnail;

    await MY_STORAGE.deleteById(req.params.id);
    await MY_STORAGE.addProduct(patchItem);
    res.json({ patchItem });
});

products.delete('/products/:id', async (req, res) => {
    const itemDeleted = await MY_STORAGE.deleteById(req.params.id);
    if (itemDeleted === 'Not Found')
        return res.status(404).send({ error: 'Product not found' });
    res.send(`{success: ${itemDeleted}}`);
});

export default products;
