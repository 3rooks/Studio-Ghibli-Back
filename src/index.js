import express from 'express';
import dotenv from 'dotenv';
import { products } from '#routes/products.js';

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', products);

app.listen(PORT, () => {
    console.log(`listening port: ${PORT}`);
});
