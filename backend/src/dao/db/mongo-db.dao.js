import { ENTITY } from '#constants/entities.js';
import { CART_MODEL } from '#schemas/carts.schema.js';
import { PRODUCT_MODEL } from '#schemas/products.schema.js';
import { USER_MODEL } from '#schemas/users.schema.js';
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
        this.models = {
            [ENTITY.PRODUCTS]: PRODUCT_MODEL,
            [ENTITY.USERS]: USER_MODEL,
            [ENTITY.CARTS]: CART_MODEL
        };
        this.connection(url);
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
    getAll = async (entity) => await this.models[entity].find();

    /**
     * GetById
     * @param entity Mongoose entity model
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    getById = async (entity, id) => await this.models[entity].findById(id);

    /**
     * Get By
     * @param entity Mongoose entity model
     * @param data data to find
     * @returns Object | Null
     */
    getBy = async (entity, data) => await this.models[entity].findOne(data);

    /**
     * SaveOne
     * @param entity Mongoose entity model
     * @param data Object data
     * @returns Object | Null
     */
    saveOne = async (entity, data) => await this.models[entity].create(data);

    /**
     * DeleteById
     * @param entity Mongoose entity model
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteById = async (entity, id) =>
        await this.models[entity].findByIdAndDelete(id);

    /**
     * UpdateById
     * @param entity Mongoose entity model
     * @param id _id(uuidv4) mongoose schema
     * @param data Object data
     * @returns Object | Null
     */
    updateById = async (entity, id, data) =>
        await this.models[entity].findByIdAndUpdate(id, data);
}

export default MongoDataBase;
