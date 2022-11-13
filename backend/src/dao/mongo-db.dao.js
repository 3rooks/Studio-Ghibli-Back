import connectDB from '#config/db.js';
import { ENTITY } from '#constants/entities.js';
import CART_MODEL from '#schemas/carts.schema.js';
import PRODUCT_MODEL from '#schemas/products.schema.js';
import USER_MODEL from '#schemas/users.schema.js';

export class MongoDataBase {
    constructor() {
        this.connection();
        this.models = {
            [ENTITY.PRODUCTS]: PRODUCT_MODEL,
            [ENTITY.USERS]: USER_MODEL,
            [ENTITY.CARTS]: CART_MODEL
        };
    }

    connection = async () => {
        await connectDB();
    };

    getAll = async (entity) => {
        const results = await this.models[entity].find();
        return results;
    };

    getById = async (entity, id) => {
        const results = await this.models[entity].findById(id);
        return results;
    };

    saveOne = async (entity, data) => {
        const resolve = await this.models[entity].create(data);
        return resolve;
    };

    deleteById = async (entity, id) => {
        const resolve = await this.models[entity].findByIdAndDelete(id);
        return resolve;
    };

    updateById = async (entity, id, data) => {
        const resolve = await this.models[entity].findByIdAndUpdate(id, data);
        return resolve;
    };

    getByEmail = async (entity, email) => {
        const results = await this.models[entity].findOne({ email });
        return results;
    };

    saveCart = async (entity) => {
        const result = await this.models[entity].create({ products: [] });
        return result;
    };

    saveMany = async (entity, data) => {
        const result = await this.models[entity].insertMany(data);
        return result;
    };
}

const MONGO_SERVICE = new MongoDataBase();

export default MONGO_SERVICE;
