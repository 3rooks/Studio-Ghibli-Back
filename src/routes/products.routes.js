import uuid from 'uuid-random';
import { Router } from 'express';
import { PRODUCTS } from '#dao/dao.js';

const products = Router();

products.get('/products', async (req, res) => {
    const results = await PRODUCTS.getAll();
    return res.status(200).json({ results });
});

products.get('/products/:id', async (req, res) => {
    const results = await PRODUCTS.getById(req.params.id);
    return res.status(200).json({ results });
});

products.post('/products', async (req, res) => {
    const { name, description, code, price, thumbnail, stock } = req.body;

    if (!name || !price || !thumbnail || !description || !code || !stock)
        return res.status(400).send({ error: 'Bad Request' });

    const newProduct = {
        id: uuid(),
        name,
        description,
        price,
        code,
        stock,
        thumbnail
    };

    const results = await PRODUCTS.saveOne(newProduct);
    return res.status(201).json({ results });
});

products.patch('/products/:id', async (req, res) => {
    const { name, description, price, code, stock, thumbnail } = req.body;

    if (!req.params.id) return res.status(400).send({ error: 'Bad Request' });
    if (!name || !price || !thumbnail || !description || !code || !stock)
        return res.status(400).send({ error: 'Bad Request' });

    const newProduct = {
        name,
        description,
        price,
        code,
        stock,
        thumbnail
    };

    const results = await PRODUCTS.updateById(req.params.id, newProduct);
    return res.status(202).json({ results });
});

products.delete('/products/:id', async (req, res) => {
    if (!req.params.id) return res.status(400).json({ error: 'Bad Request' });

    const results = await PRODUCTS.deleteById(req.params.id);
    return res.status(202).json({ results });
});

export default products;