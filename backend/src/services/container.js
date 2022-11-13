import { STORAGE_PATH } from '#utils/paths.js';
import fs from 'fs';

const URL = STORAGE_PATH;
class Container {
    getAll = async () => {
        try {
            if (fs.existsSync(URL)) {
                const allData = await fs.promises.readFile(URL, 'utf-8');
                const products = await JSON.parse(allData);
                return products;
            } else {
                return [];
            }
        } catch (err) {
            console.log(`error read ${err}`);
        }
    };

    addProduct = async (product) => {
        try {
            const products = await this.getAll();
            if (products.length >= 0) {
                products.push(product);
                await fs.promises.writeFile(
                    URL,
                    JSON.stringify(products, null, '\t')
                );
            }
        } catch (err) {
            console.log(`error write ${err}`);
        }
    };

    getById = async (id) => {
        try {
            const products = await this.getAll();
            const findById = await products.find((item) => item.id === id);
            if (!findById) return 'Product not found';
            return findById;
        } catch (err) {
            console.log(`error search by ID ${err}`);
        }
    };

    putById = async (id) => {
        try {
            const products = await this.getAll();
            const findById = await products.find((item) => item.id === id);
            if (!findById) return 'Product not found';
            return findById;
        } catch (err) {
            console.log(`error put by ID ${err}`);
        }
    };

    deleteById = async (id) => {
        try {
            const products = await this.getAll();
            const itemIndex = products.findIndex((item) => item.id === id);
            if (itemIndex === -1) return 'Not Found';
            else {
                products.splice(itemIndex, 1);
                await fs.promises.writeFile(
                    URL,
                    JSON.stringify(products, null, '\t')
                );
                return `Item Deleted`;
            }
        } catch (err) {
            console.log(`error delete by ID ${err}`);
        }
    };

    deleteAll = async () => {
        try {
            await fs.promises.writeFile(URL, JSON.stringify([], null, '\t'));
            console.log('storage clean now');
        } catch (err) {
            console.log(`error delete all ${err}`);
        }
    };
}

export default Container;
