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

    async getByEmail(email) {
        const results = await this.model.findOne({ email });
        return results;
    }

    async getByUsername(username) {
        const results = await this.model.findOne({ username });
        return results;
    }

    async getById(id) {
        const results = await this.model.findById(id);
        return results;
    }

    async updateById(id, data) {
        const resolve = await this.model.findByIdAndUpdate(id, data);
        return resolve;
    }

    async deleteById(id) {
        const resolve = await this.model.findByIdAndDelete(id);
        return resolve;
    }

    async updateCart(id, data) {
        const resolve = await this.model.updateOne({ _id: id }, [
            { $set: { cart: data } }
        ]);
        return resolve;
    }
}