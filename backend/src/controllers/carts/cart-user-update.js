import {
    CART_RESPONSE,
    PRODUCT_RESPONSE,
    USER_RESPONSE
} from '#constants/response-status-json.js';
import { CARTS, USERS } from '#services/repositories.service.js';

const patchCartController = async (req, res) => {
    try {
        const { id } = req;
        const { cartId, productId } = req.params;
        const { quantity } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const userCart = await CARTS.getCartById(cartId);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);

        const existProductInCart = userCart.products.find(
            (i) => i.product === productId || i.product._id === productId
        );
        if (!existProductInCart)
            return res.status(404).json(PRODUCT_RESPONSE[404]);

        existProductInCart.quantity = quantity;

        await CARTS.updateCartById(userCart._id, userCart);

        return res.status(202).json(CART_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};

export default patchCartController;
