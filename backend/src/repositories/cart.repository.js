import { ENTITY } from '#constants/entities.js';
import MONGO_SERVICE from '#dao/mongo-db.dao.js';

class CartRepository {
    constructor() {
        this.entity = ENTITY.CARTS;
        this.persistence = MONGO_SERVICE;
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

const REPO_CART = new CartRepository();

export default REPO_CART;
