import { CART_PATH } from '#utils/paths.js';
import fs from 'fs';

const URL = CART_PATH;
class Cart {
    getAll = async () => {
        try {
            if (fs.existsSync(URL)) {
                const allData = await fs.promises.readFile(URL, 'utf-8');
                const carts = await JSON.parse(allData);
                return carts;
            } else {
                return [];
            }
        } catch (err) {
            console.log(`error read ${err}`);
        }
    };

    addCart = async (product) => {
        try {
            const products = await this.getAll();
            if (products.length >= 0) {
                products.push(product);
                await fs.promises.writeFile(
                    URL,
                    JSON.stringify(products, null, '\t')
                );
            } else {
                return {};
            }
        } catch (err) {
            console.log(`error write ${err}`);
        }
    };

    getById = async (id) => {
        try {
            const carts = await this.getAll();
            const findById = await carts.find((item) => item.id === id);
            if (!findById) return 'Cart not found';
            return findById;
        } catch (err) {
            console.log(`error search by ID ${err}`);
        }
    };

    putById = async (id) => {
        try {
            const products = await this.getAll();
            const findById = await products.find((item) => item.id === id);
            if (!findById) return 'Not Found';
            return findById;
        } catch (err) {
            console.log(`error put by ID ${err}`);
        }
    };

    deleteById = async (id) => {
        try {
            const allCarts = await this.getAll();
            const cartIndex = allCarts.findIndex((item) => item.id === id);
            if (cartIndex === -1) return 'Cart not found';
            else {
                allCarts.splice(cartIndex, 1);
                await fs.promises.writeFile(
                    URL,
                    JSON.stringify(allCarts, null, '\t')
                );
                return `Cart Deleted`;
            }
        } catch (err) {
            console.log(`error delete by ID ${err}`);
        }
    };

    deleteProductInCart = async (idCart, idProduct) => {
        try {
            const allCarts = await this.getAll();
            const cart = await allCarts.find((item) => item.id === idCart);
            const cartIndex = cart.products.findIndex(
                (item) => item.product === idProduct
            );

            if (cartIndex === -1) return 'Cart not found';

            cart.products.splice(cartIndex, 1);
            await fs.promises.writeFile(
                URL,
                JSON.stringify(allCarts, null, '\t')
            );
            return `Product Deleted`;
        } catch (err) {
            console.log(`error delete product in cart ${err}`);
        }
    };

    addProductInCart = async (idCart, newProduct) => {
        try {
            const allCarts = await this.getAll();
            const cart = await allCarts.find((item) => item.id === idCart);
            if (!cart) return 'Cart not found';

            if (cart.products.length === 1) {
                await cart.products.push(newProduct);
                await fs.promises.writeFile(
                    URL,
                    JSON.stringify(allCarts, null, '\t')
                );
            }

            const item = await cart.products.find((item) => {
                return item.product === newProduct.product;
            });

            if (!item) {
                await cart.products.push(newProduct);
                newProduct.quantity++;
                await fs.promises.writeFile(
                    URL,
                    JSON.stringify(allCarts, null, '\t')
                );
            }

            item.quantity++;

            await fs.promises.writeFile(
                URL,
                JSON.stringify(allCarts, null, '\t')
            );
        } catch (err) {
            console.log(`error add cart ${err}`);
        }
    };
}

export default Cart;
