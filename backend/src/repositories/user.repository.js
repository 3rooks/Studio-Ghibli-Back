import { ENTITY } from '#constants/entities.js';

/**
 * User Repository
 */
export class UserRepository {
    /**
     * Constructor
     * @param persistence application persistence
     */
    constructor(persistence) {
        this.entity = ENTITY.USERS;
        this.persistence = persistence;
    }

    /**
     * Get User By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    getUserById = async (id) => {
        const result = await this.persistence.getById(this.entity, id);
        return result;
    };

    /**
     * Get User By Email
     * @param email User email
     * @returns Object | Null
     */
    getUserByEmail = async (email) => {
        const result = await this.persistence.getByEmail(this.entity, email);
        return result;
    };

    /**
     * Register User
     * @param newUser User data
     * @returns Object | Null
     */
    registerUser = async (newUser) => {
        const result = await this.persistence.saveOne(this.entity, newUser);
        return result;
    };

    /**
     * Update User By Id
     * @param id _id(uuidv4) mongoose schema
     * @param user User data
     * @returns Object | Null
     */
    updateUserById = async (id, user) => {
        const result = await this.persistence.updateById(this.entity, id, user);
        return result;
    };

    /**
     * Delete User By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteUserById = async (id) => {
        const result = await this.persistence.deleteById(this.entity, id);
        return result;
    };
}

export default UserRepository;
