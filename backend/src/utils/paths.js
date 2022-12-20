import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
// Config __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Paths
const PUBLIC_PATH = resolve(__dirname, '../public');
const VIEWS_PATH = resolve(__dirname, '../views');
const IMG_PATH = resolve(__dirname, '../public/images');
const DOCS_PATH = resolve(__dirname, '../docs');
const USER_PATH = resolve(__dirname, '../files/users.json');
const CART_PATH = resolve(__dirname, '../files/carts.json');
const PRODUCT_PATH = resolve(__dirname, '../files/products.json');

export {
    PUBLIC_PATH,
    IMG_PATH,
    DOCS_PATH,
    USER_PATH,
    CART_PATH,
    PRODUCT_PATH,
    VIEWS_PATH
};
