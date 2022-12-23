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
    getUserById = async (id) => await this.persistence.getById(this.entity, id);

    /**
     * Get User By Email
     * @param email User email
     * @returns Object | Null
     */
    getUserByEmail = async (email) =>
        await this.persistence.getBy(this.entity, {
            email
        });

    /**
     * Register User
     * @param newUser User data
     * @returns Object | Null
     */
    registerUser = async (newUser) =>
        await this.persistence.saveOne(this.entity, newUser);

    /**
     * Update User By Id
     * @param id _id(uuidv4) mongoose schema
     * @param user User data
     * @returns Object | Null
     */
    updateUserById = async (id, user) =>
        await this.persistence.updateById(this.entity, id, user);

    /**
     * Delete User By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteUserById = async (id) =>
        await this.persistence.deleteById(this.entity, id);
}
