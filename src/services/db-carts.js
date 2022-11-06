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

    async getOne(id) {
        const result = await this.model.findOne({ id });
        return result;
    }

    async updateById(id, data) {
        const resolve = await this.model.findByIdAndUpdate(id, data);
        return resolve;
    }

    async saveOne(data) {
        const resolve = await this.model.create(data);
        return resolve;
    }

    async saveCart() {
        const result = await this.model.create({ products: [] });
        return result;
    }
}
