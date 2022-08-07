import uuidV4 from '#lib/uuidRandom.js';
import Container from '#controllers/container.js';
import { Router } from 'express';

const MY_STORAGE = new Container();
const admin = true;
const products = Router();

products.get('/products', async (req, res) => {
    const products = await MY_STORAGE.getAll();
    if (products.length === 0)
        return res.status(404).send({ error: 'Not products yet' });
    return res.status(200).json({ products });
});

products.get('/products/:id', async (req, res) => {
    const itemSearched = await MY_STORAGE.getById(req.params.id);
    if (itemSearched === 'Product not found')
        return res.status(404).send({ error: 'Product not found' });
    return res.status(200).json({ itemSearched });
});

products.post('/products', async (req, res) => {
    if (admin === true)
        return res.status(401).json({ error: 'Not authorized' });

    const { name, description, code, price, thumbnail, stock } = req.body;

    const newProduct = {
        id: uuidV4(),
        timestamp: Date.now(),
        name,
        description,
        price,
        code,
        stock,
        thumbnail
    };

    const products = await MY_STORAGE.getAll();
    const item = products.find(
        (item) => item.name === name && item.code === code
    );

    if (!name || !price || !thumbnail || !description || !code || !stock)
        return res.status(400).send({ error: 'Bad request product' });

    if (item)
        return res
            .status(409)
            .send({ error: 'Conflict product already exists' });

    await MY_STORAGE.addProduct(newProduct);
    return res.status(201).json({ success: newProduct });
});

products.put('/products/:id', async (req, res) => {
    if (admin === true)
        return res.status(401).json({ error: 'Not authorized' });

    const patchItem = await MY_STORAGE.putById(req.params.id);
    const { name, description, code, price, thumbnail, stock } = req.body;

    if (patchItem === 'Product not found')
        return res.status(404).send({ error: 'Product not found' });

    if (!name || !price || !thumbnail || !description || !code || !stock)
        return res
            .status(400)
            .send({ error: "Bad request can't patch the product" });

    patchItem.name = name;
    patchItem.description = description;
    patchItem.price = price;
    patchItem.code = code;
    patchItem.stock = stock;
    patchItem.thumbnail = thumbnail;

    await MY_STORAGE.deleteById(req.params.id);
    await MY_STORAGE.addProduct(patchItem);
    return res.status(202).json({ success: patchItem });
});

products.delete('/products/:id', async (req, res) => {
    if (admin === true)
        return res.status(401).json({ error: 'Not authorized' });

    const itemDeleted = await MY_STORAGE.deleteById(req.params.id);
    if (itemDeleted === 'Not Found')
        return res.status(404).send({ error: 'Product not found' });
    return res.status(202).json(`{success: ${itemDeleted}}`);
});

export default products;
