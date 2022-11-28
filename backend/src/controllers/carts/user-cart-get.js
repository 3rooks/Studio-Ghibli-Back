import {
    CART_RESPONSE,
    USER_RESPONSE
} from '#constants/response-status-json.js';
import { CARTS, USERS } from '#repositories/repositories.js';

const getUserCartController = async (req, res) => {
    try {
        const { id } = req;
        const { cartId } = req.params;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const userCart = await CARTS.getCartById(cartId);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);

        return res.status(200).json({ results: userCart });
    } catch (error) {
        console.log(error);
    }
};

export default getUserCartController;
