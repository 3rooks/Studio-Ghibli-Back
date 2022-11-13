import { ENTITY } from '#constants/entities.js';
import MONGO_SERVICE from '#dao/mongo-db.dao.js';

class UserRepository {
    constructor() {
        this.entity = ENTITY.USERS;
        this.persistence = MONGO_SERVICE;
    }

    getUserById = async (id) => {
        const result = await this.persistence.getById(this.entity, id);
        return result;
    };

    getUserByEmail = async (email) => {
        const result = await this.persistence.getByEmail(this.entity, email);
        return result;
    };

    saveUser = async (newUser) => {
        const result = await this.persistence.saveOne(this.entity, newUser);
        return result;
    };

    updateUserById = async (id, user) => {
        const result = await this.persistence.updateById(this.entity, id, user);
        return result;
    };

    deleteUserById = async (id) => {
        const result = await this.persistence.deleteById(this.entity, id);
        return result;
    };
}

const REPO_USER = new UserRepository();

export default REPO_USER;
