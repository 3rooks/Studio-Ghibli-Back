import fs from 'fs';
import { STORAGE_PATH } from '#utils/paths.js';

export default class Products {
    // CRUD
    async getAll() {
        try {
            if (fs.existsSync(STORAGE_PATH)) {
                const allData = await fs.promises.readFile(
                    STORAGE_PATH,
                    'utf-8'
                );
                const products = await JSON.parse(allData);
                return products;
            } else {
                return [];
            }
        } catch (err) {
            throw new Error('error to read');
        }
    }

    async getById(id) {
        try {
            const products = await this.getAll();
            const findById = await products.find((i) => i.id === id);
            if (!findById) throw new Error('not found');
            return findById;
        } catch (err) {
            return err.message;
        }
    }

    async saveOne(product) {
        try {
            const products = await this.getAll();
            products.push(product);
            await fs.promises.writeFile(
                STORAGE_PATH,
                JSON.stringify(products, null, '\t')
            );
            return { added: product };
        } catch (err) {
            return err.message;
        }
    }

    async saveMany(_) {}

    async updateById(id, data) {
        try {
            const toDelete = await this.getById(id);
            if (toDelete === 'not found') throw new Error('not found');
            await this.deleteById(toDelete.id);
            const { name, description, price, code, stock, thumbnail } = data;
            const updatedItem = {
                id,
                name,
                description,
                price,
                code,
                stock,
                thumbnail
            };
            await this.saveOne(updatedItem);
            return { updated: updatedItem };
        } catch (err) {
            return err.message;
        }
    }

    async updateMany(_) {}

    async deleteById(id) {
        try {
            const products = await this.getAll();
            const itemIndex = products.findIndex((i) => i.id === id);
            if (itemIndex === -1) throw new Error('not found');
            else {
                products.splice(itemIndex, 1);
                await fs.promises.writeFile(
                    STORAGE_PATH,
                    JSON.stringify(products, null, '\t')
                );
                return { success: 'deleted' };
            }
        } catch (err) {
            return err.message;
        }
    }

    async deleteMany(_) {}
}
