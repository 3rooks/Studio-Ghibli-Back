import mongoose from 'mongoose';

export default class Users {
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
}
