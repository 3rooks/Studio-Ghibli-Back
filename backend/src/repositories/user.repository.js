import { ENTITY } from '#constants/entities.js';

export class UserRepository {
    constructor(persistence) {
        this.entity = ENTITY.USERS;
        this.persistence = persistence;
    }

    getUserById = async (id) => {
        const result = await this.persistence.getById(this.entity, id);
        console.log('repo ', result);
        return result;
    };

    getUserByEmail = async (email) => {
        const result = await this.persistence.getByEmail(this.entity, email);
        return result;
    };

    registerUser = async (newUser) => {
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

export default UserRepository;
