import express from 'express';
import { PORT } from '#constants/port.js';
import { Container } from '#managers/container.js';

const MY_STORAGE = new Container();

const getAllProducts = async () => {
    const allData = await MY_STORAGE.getAll();
    const { products } = allData;
    return products;
};

const app = express();

app.listen(PORT, () => {
    console.log(`listening port: ${PORT}`);
});

app.get('/', (req, res) => {
    res.send(
        `<h1>Paths/</h1><hr>
        <ul>
            <li>/random => random product</li>
            <li>/products => all products</li>
            <li>/searchById => example: /searchById?id=3</li>
        <ul>`
    );
});

app.get('/random', async (req, res) => {
    const products = await getAllProducts();
    const ids = await products.map((item) => item.id);

    const randomNumber = Math.floor(Math.random() * 10 + 1).toString();

    if (ids.includes(randomNumber))
        res.send(products.find((item) => item.id === randomNumber));
    else res.send('try again press f5');
});

app.get('/products', async (req, res) => {
    const products = await getAllProducts();
    res.send(products);
});

app.get('/searchById', async (req, res) => {
    const products = await getAllProducts();

    const ids = await products.map((item) => item.id);
    const idToSearch = req.query.id;

    if (ids.includes(idToSearch))
        res.send(products.find((item) => item.id === idToSearch));
    else res.send('not exist yet');
});
