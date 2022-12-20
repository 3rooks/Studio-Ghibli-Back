import { ENTITY } from '#constants/entities.js';

/**
 * Cart Repository
 */
export class CartRepository {
    /**
     * Constructor
     * @param persistence application persistence
     */
    constructor(persistence) {
        this.entity = ENTITY.CARTS;
        this.persistence = persistence;
    }

    /**
     * Get User Cart
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    getCartById = async (id) => await this.persistence.getById(this.entity, id);

    /**
     * Update User Cart
     * @param id _id(uuidv4) mongoose schema
     * @param cart Update user cart
     * @returns Object | Null
     */
    updateCartById = async (id, cart) =>
        await this.persistence.updateById(this.entity, id, cart);

    /**
     * Create User Cart
     * @returns Object | Null
     */
    createUserCart = async () =>
        await this.persistence.saveOne(this.entity, {
            products: []
        });

    /**
     * Delete User Cart
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteUserCart = async (id) =>
        await this.persistence.deleteById(this.entity, id);
}
