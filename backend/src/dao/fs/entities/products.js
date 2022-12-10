import { PRODUCT_PATH } from '#utils/paths.js';
import fs from 'fs';
import uuid from 'uuid-random';

class ProductFS {
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
            const products = await fs.promises.readFile(this.path, 'utf8');
            const results = await JSON.parse(products);
            return results;
        } catch (error) {
            console.log(error);
        }
    };

    findOne = async (data) => {
        const products = await this.find();
        const results = await products.find((i) => i.title === data.title);
        return results;
    };

    findById = async (id) => {
        try {
            const products = await this.find();
            const findById = await products.find((item) => item._id === id);
            if (!findById) return false;
            return findById;
        } catch (err) {
            console.log(err);
        }
    };

    findByIdAndDelete = async (id) => {
        try {
            const products = await this.find();
            const productIndex = await products.findIndex((i) => i._id === id);
            if (productIndex === -1) return false;
            products.splice(productIndex, 1);
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(products, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };

    create = async (product) => {
        try {
            const products = await this.find();
            const indexedProduct = {
                _id: uuid(),
                ...product
            };
            products.push(indexedProduct);
            await fs.promises.writeFile(
                this.path,
                JSON.stringify(products, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };

    findByIdAndUpdate = async (id, product) => {
        try {
            const {
                title,
                originalTitle,
                originalTitleRomanised,
                image,
                description,
                director,
                producer,
                releaseYear,
                minDuration,
                info,
                price
            } = product;

            const products = await this.find();

            const productIndex = await products.findIndex((i) => i._id === id);
            if (productIndex === -1) return false;
            products.splice(productIndex, 1);

            const updatedProduct = {
                _id: id,
                title,
                originalTitle,
                originalTitleRomanised,
                image,
                description,
                director,
                producer,
                releaseYear,
                minDuration,
                info,
                price
            };
            products.push(updatedProduct);

            await fs.promises.writeFile(
                this.path,
                JSON.stringify(products, null, '\t')
            );
            return true;
        } catch (err) {
            console.log(err);
        }
    };
}

export const fsProducts = new ProductFS(PRODUCT_PATH);
