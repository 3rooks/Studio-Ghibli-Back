import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOCS_PATH = resolve(__dirname, '../docs');
const PUBLIC_PATH = resolve(__dirname, '../public');
const IMG_PATH = resolve(__dirname, '../public/images');
const USER_PATH = resolve(__dirname, '../files/users.json');
const CART_PATH = resolve(__dirname, '../files/carts.json');
const PRODUCT_PATH = resolve(__dirname, '../files/products.json');
const PAYMENT_PATH = resolve(__dirname, '../views/payment.ejs');
const REGISTER_PATH = resolve(__dirname, '../views/register.ejs');

export {
    PUBLIC_PATH,
    IMG_PATH,
    DOCS_PATH,
    USER_PATH,
    CART_PATH,
    PRODUCT_PATH,
    PAYMENT_PATH,
    REGISTER_PATH
};
