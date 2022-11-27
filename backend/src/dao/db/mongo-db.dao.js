import { ENTITY } from '#constants/entities.js';
import CART_MODEL from '#schemas/carts.schema.js';
import PRODUCT_MODEL from '#schemas/products.schema.js';
import USER_MODEL from '#schemas/users.schema.js';
import mongoose from 'mongoose';

/**
 * Mongo database connection/operations
 */
class MongoDataBase {
    /**
     * Constructor
     * @params url Mongo uri
     */
    constructor(url) {
        this.connection(url);
        this.models = {
            [ENTITY.PRODUCTS]: PRODUCT_MODEL,
            [ENTITY.USERS]: USER_MODEL,
            [ENTITY.CARTS]: CART_MODEL
        };
    }

    /**
     *
     * @param {*} url
     * @returns
     */
    connection = async (url) => {
        try {
            const db = await mongoose.connect(url);
            console.log(`persistence/connected-db: ${db.connection.name}`);
            return db;
        } catch (error) {
            console.log(`Failed connection to persistence-db: ${error}`);
        }
    };

    /**
     *
     * @param entity Mongoose model entity
     * @returns
     */
    getAll = async (entity) => {
        const results = await this.models[entity].find();
        return results;
    };

    /**
     *
     * @param entity Mongoose model entity
     * @param id _id into mongo schema
     * @returns Object | Null
     */
    getById = async (entity, id) => {
        const results = await this.models[entity].findById(id);
        return results;
    };

    /**
     *
     * @param entity entity
     * @param data data
     * @returns Object | Null
     */
    saveOne = async (entity, data) => {
        const resolve = await this.models[entity].create(data);
        return resolve;
    };

    /**
     *
     * @param {*} entity
     * @param {*} id
     * @returns
     */
    deleteById = async (entity, id) => {
        const resolve = await this.models[entity].findByIdAndDelete(id);
        return resolve;
    };

    /**
     *
     * @param {*} entity
     * @param {*} id
     * @param {*} data
     * @returns
     */
    updateById = async (entity, id, data) => {
        const resolve = await this.models[entity].findByIdAndUpdate(id, data);
        return resolve;
    };

    /**
     *
     * @param {*} entity
     * @param {*} email
     * @returns
     */
    getByEmail = async (entity, email) => {
        const results = await this.models[entity].findOne({ email });
        return results;
    };

    /**
     *
     * @param {*} entity
     * @returns
     */
    saveCart = async (entity) => {
        const result = await this.models[entity].create({ products: [] });
        return result;
    };

    /**
     *
     * @param {*} entity
     * @param {*} data
     * @returns
     */
    saveMany = async (entity, data) => {
        const result = await this.models[entity].insertMany(data);
        return result;
    };
}

export default MongoDataBase;
