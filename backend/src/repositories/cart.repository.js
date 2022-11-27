import { ENTITY } from '#constants/entities.js';
class CartRepository {
    constructor(persistence) {
        this.entity = ENTITY.CARTS;
        this.persistence = persistence;
    }

    getCartById = async (id) => {
        const result = await this.persistence.getById(this.entity, id);
        return result;
    };

    updateCartById = async (id, cart) => {
        const result = await this.persistence.updateById(this.entity, id, cart);
        return result;
    };

    createUserCart = async () => {
        const result = await this.persistence.saveCart(this.entity);
        return result;
    };
}

export default CartRepository;
