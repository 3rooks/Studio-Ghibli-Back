import { ENTITY } from '#constants/entities.js';
import { fsCarts } from '#dao/fs/entities/carts.js';
import { fsProducts } from '#dao/fs/entities/products.js';
import { fsUsers } from '#dao/fs/entities/users.js';

export class FileSystemDB {
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

        if (!products && !users && !carts) console.log('error/persistence:fs');
        console.log('persistence/connected:fs');
    };

    getAll = async (entity) => await this.models[entity].find();

    getById = async (entity, id) => await this.models[entity].findById(id);

    getBy = async (entity, data) => await this.models[entity].findOne(data);

    saveOne = async (entity, data) => await this.models[entity].create(data);

    deleteById = async (entity, id) =>
        await this.models[entity].findByIdAndDelete(id);

    updateById = async (entity, id, data) =>
        await this.models[entity].findByIdAndUpdate(id, data);
}
