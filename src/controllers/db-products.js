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
        const results = await this.model.find(id);
        return results;
    }

    async saveOne(data) {
        const resolve = await this.model.create(data);
        return resolve;
    }

    async saveMany(_) {
        const resolve = await this.model.insertMany(_);
        return resolve;
    }

    async updateById(id, data) {
        const resolve = await this.model.updateOne(
            await this.getById(id),
            data
        );
        return resolve;
    }

    async updateMany(_) {
        const resolve = await this.model.updateMany(_);
        return resolve;
    }

    async deleteById(id) {
        const resolve = await this.model.deleteOne(await this.getById(id));
        return resolve;
    }

    async deleteMany(_) {
        const resolve = await this.model.deleteMany(_);
        return resolve;
    }
}
