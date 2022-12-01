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
        const results = await this.persistence.getById(this.entity, id);
        return results;
    };

    /**
     * Get User By Email
     * @param email User email
     * @returns Object | Null
     */
    getUserByEmail = async (email) => {
        const results = await this.persistence.getBy(this.entity, {
            email
        });
        return results;
    };

    /**
     * Register User
     * @param newUser User data
     * @returns Object | Null
     */
    registerUser = async (newUser) => {
        const results = await this.persistence.saveOne(this.entity, newUser);
        return results;
    };

    /**
     * Update User By Id
     * @param id _id(uuidv4) mongoose schema
     * @param user User data
     * @returns Object | Null
     */
    updateUserById = async (id, user) => {
        const results = await this.persistence.updateById(
            this.entity,
            id,
            user
        );
        return results;
    };

    /**
     * Delete User By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteUserById = async (id) => {
        const results = await this.persistence.deleteById(this.entity, id);
        return results;
    };
}

export default UserRepository;
