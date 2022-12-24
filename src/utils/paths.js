import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOCS_PATH = resolve(__dirname, '../docs');
const PUBLIC_PATH = resolve(__dirname, '../public');
const IMG_PATH = resolve(__dirname, '../public/images');
const USER_PATH = resolve(__dirname, '../files/users.json');
const CART_PATH = resolve(__dirname, '../files/carts.json');
const EMAIL_PATH = resolve(__dirname, '../views/email.ejs');
const DELETE_PATH = resolve(__dirname, '../views/delete.ejs');
const ERROR_PATH = resolve(__dirname, '../errors/errors.txt');
const PAYMENT_PATH = resolve(__dirname, '../views/payment.ejs');
const REGISTER_PATH = resolve(__dirname, '../views/register.ejs');
const PRODUCT_PATH = resolve(__dirname, '../files/products.json');

export {
    DOCS_PATH,
    PUBLIC_PATH,
    IMG_PATH,
    USER_PATH,
    CART_PATH,
    PRODUCT_PATH,
    PAYMENT_PATH,
    REGISTER_PATH,
    ERROR_PATH,
    EMAIL_PATH,
    DELETE_PATH
};
