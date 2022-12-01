import { ENTITY } from '#constants/entities.js';

/**
 * Cart Repository
 */
class CartRepository {
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
    getCartById = async (id) => {
        const results = await this.persistence.getById(this.entity, id);
        return results;
    };

    /**
     * Update User Cart
     * @param id _id(uuidv4) mongoose schema
     * @param cart Update user cart
     * @returns Object | Null
     */
    updateCartById = async (id, cart) => {
        const results = await this.persistence.updateById(
            this.entity,
            id,
            cart
        );
        return results;
    };

    /**
     * Create User Cart
     * @returns Object | Null
     */
    createUserCart = async () => {
        const results = await this.persistence.saveOne(this.entity, {
            products: []
        });
        return results;
    };

    /**
     * Delete User Cart
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteUserCart = async (id) => {
        const results = await this.persistence.deleteById(this.entity, id);
        return results;
    };
}

export default CartRepository;
