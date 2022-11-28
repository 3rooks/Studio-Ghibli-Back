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
     * Connection to persistence
     * @param url Mongoose connection url
     * @returns Instance mongoose
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
     * Get
     * @param entity Mongoose entity model
     * @returns Array | Null
     */
    getAll = async (entity) => {
        const results = await this.models[entity].find();
        return results;
    };

    /**
     * GetById
     * @param entity Mongoose entity model
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    getById = async (entity, id) => {
        const results = await this.models[entity].findById(id);
        return results;
    };

    /**
     * SaveOne
     * @param entity Mongoose entity model
     * @param data Object data
     * @returns Object | Null
     */
    saveOne = async (entity, data) => {
        const results = await this.models[entity].create(data);
        return results;
    };

    /**
     * DeleteById
     * @param entity Mongoose entity model
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteById = async (entity, id) => {
        const results = await this.models[entity].findByIdAndDelete(id);
        return results;
    };

    /**
     * UpdateById
     * @param entity Mongoose entity model
     * @param id _id(uuidv4) mongoose schema
     * @param data Object data
     * @returns Object | Null
     */
    updateById = async (entity, id, data) => {
        const results = await this.models[entity].findByIdAndUpdate(id, data);
        return results;
    };

    /**
     * Get User By Email
     * @param entity Mongoose entity model
     * @param email User email
     * @returns Object | Null
     */
    getByEmail = async (entity, email) => {
        const results = await this.models[entity].findOne({ email });
        return results;
    };

    /**
     * Create User Cart
     * @param entity Mongoose entity model
     * @returns Object | Null
     */
    saveCart = async (entity) => {
        const results = await this.models[entity].create({ products: [] });
        return results;
    };
}

export default MongoDataBase;
