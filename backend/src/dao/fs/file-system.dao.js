import { ENTITY } from '#constants/entities.js';
import fsCarts from '#dao/fs/entities/carts.js';
import fsProducts from '#dao/fs/entities/products.js';
import fsUsers from '#dao/fs/entities/users.js';

class FileSystemDB {
    constructor() {
        this.models = {
            [ENTITY.PRODUCTS]: fsProducts,
            [ENTITY.USERS]: fsUsers,
            [ENTITY.CARTS]: fsCarts
        };
        this.connection();
    }

    connection = async () => {
        const products = await this.models[ENTITY.PRODUCTS].connection();
        const users = await this.models[ENTITY.USERS].connection();
        const carts = await this.models[ENTITY.CARTS].connection();

        if (!products && users && carts) console.log('error/persistence:fs');
        console.log('persistence/connected:fs');
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
        const results = await this.models[entity].create(data);
        return results;
    };

    deleteById = async (entity, id) => {
        const results = await this.models[entity].findByIdAndDelete(id);
        return results;
    };

    updateById = async (entity, id, data) => {
        const results = await this.models[entity].findByIdAndUpdate(id, data);
        return results;
    };

    getBy = async (entity, data) => {
        const results = await this.models[entity].findOne(data);
        return results;
    };
}

export default FileSystemDB;
