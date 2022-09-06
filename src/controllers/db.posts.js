import mongoose from 'mongoose';

export default class Posts {
    constructor(collection, schema) {
        this.model = mongoose.model(collection, schema);
    }

    // CRUD
    async getAll() {
        const results = await this.model.find();
        return results;
    }

    async saveOne(data) {
        const resolve = await this.model.create(data);
        return resolve;
    }

    async findAndUpdate(id, data) {
        await this.model.findOneAndUpdate(id, data);
    }
}
