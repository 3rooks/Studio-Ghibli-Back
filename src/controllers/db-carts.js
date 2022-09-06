import mongoose from 'mongoose';
// IDC
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
        const results = await this.model.findById(id);
        return results.products;
    }

    async getByIdAndUpdateProducts(id, data) {
        const results = await this.model.findById(id);
        results.products.push(data);
        await this.model.findOneAndUpdate(id, results);
        // await this.model.updateOne({ _id: id }, { $set: results });
        return results;
    }

    async saveOne(data) {
        const resolve = await this.model.create(data);
        return resolve;
    }

    async saveMany(_) {}

    async updateById(_) {}

    async updateMany(_) {}

    async deleteById(id) {
        const resolve = await this.model.findByIdAndDelete(id);
        // const resolve = await this.model.deleteOne(await this.getById(id));
        return resolve;
    }

    async deleteProductInCartById(idCart, idProduct) {
        const results = await this.model.findById(idCart);
        const item = results.products.findIndex((i) => i._id === idProduct);
        results.products.splice(item, 1);
        await this.model.findOneAndUpdate(idCart, results);
        return results;
    }

    async deleteMany(_) {}
}
