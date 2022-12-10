import { CART_PATH } from '#utils/paths.js';
import fs from 'fs';
import uuid from 'uuid-random';

class CartFS {
    constructor(path) {
        this.path = path;
    }

    connection = async () => {
        try {
            if (!fs.existsSync(this.path)) {
                await fs.promises.writeFile(this.path, JSON.stringify([]));
                return true;
            }
            return true;
        } catch (error) {
            return false;
        }
    };

    find = async () => {
        try {
            const carts = await fs.promises.readFile(this.path, 'utf8');
            const results = await JSON.parse(carts);
            return results;
        } catch (error) {
            console.log(error);
        }
    };

    findOne = async (data) => {
        const users = await this.find();
        const results = await users.find((i) => i.email === data.email);
        return results;
    };

    findById = async (id) => {
        try {
            const carts = await this.find();
            const findById = await carts.find((item) => item._id === id);
            if (!findById) return false;
            return findById;
        } catch (err) {
            console.log(err);
        }
    };

    findByIdAndDelete = async (id) => {
        try {
            const carts = await this.find();
            const cartIndex = await carts.findIndex((i) => i._id === id);
            if (cartIndex === -1) return false;
            carts.splice(cartIndex, 1);
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(carts, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };

    create = async (cart) => {
        try {
            const carts = await this.find();
            const indexedCart = {
                _id: uuid(),
                ...cart
            };
            carts.push(indexedCart);
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(carts, null, '\t')
            );
            return indexedCart;
        } catch (err) {
            console.log(err);
        }
    };

    findByIdAndUpdate = async (id, cart) => {
        try {
            const users = await this.find();

            const productIndex = await users.findIndex((i) => i._id === id);
            if (productIndex === -1) return false;
            users.splice(productIndex, 1);

            const updatedCart = {
                _id: id,
                ...cart
            };
            users.push(updatedCart);

            await fs.promises.writeFile(
                this.path,
                JSON.stringify(users, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };
}

export const fsCarts = new CartFS(CART_PATH);
