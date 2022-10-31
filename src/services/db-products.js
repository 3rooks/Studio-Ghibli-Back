import mongoose from 'mongoose';

export default class Products {
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

    async saveOne(product) {
        const resolve = await this.model.create(product);
        return resolve;
    }

    async deleteById(id) {
        const resolve = await this.model.findByIdAndDelete(id);
        return resolve;
    }
}
