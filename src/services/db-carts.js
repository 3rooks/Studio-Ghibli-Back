import mongoose from 'mongoose';

export default class Carts {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, schema);
    }

    // CRUD
    async getAll() {
        const results = await this.model.find();
        return results;
    }

    async getById(id) {
        const results = await this.model.findById(id);
        return results;
    }

    async getByIdAndShowProducts(id) {
        const results = await this.getById(id);
        return results.products;
    }

    async getByIdAndUpdateProducts(id, data) {
        // in progress
        const { product, quantity } = data;
        const a = await this.getById(id);

        const newProduct = {
            product,
            quantity
        };

        a.products.push(newProduct);

        return a;
    }

    async saveOne(data) {
        const resolve = await this.model.create(data);
        return resolve;
    }

    async saveMany(_) {}

    async updateById(id, data) {
        // const resolve = await this.model.updateOne(
        //     await this.getById(id),
        //     data
        // );
        // return resolve;
    }

    async updateMany(_) {
        // const resolve = await this.model.updateMany(_);
        // return resolve;
    }

    async deleteById(id) {
        const resolve = await this.model.deleteOne(await this.getById(id));
        return resolve;
    }

    async deleteMany(_) {
        // const resolve = await this.model.deleteMany(_);
        // return resolve;
    }

    async saveCart() {
        const result = await this.model.create({ products: [] });
        return result;
    }
}
