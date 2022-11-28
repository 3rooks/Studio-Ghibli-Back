import {
    CART_RESPONSE,
    PRODUCT_RESPONSE,
    USER_RESPONSE
} from '#constants/response-status-json.js';
import { CARTS, USERS } from '#repositories/repositories.js';

const userCartDeleteProductController = async (req, res) => {
    try {
        const { id } = req;
        const { productId } = req.params;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const userCart = await CARTS.getCartById(existUser.cart);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);

        const existProductInCart = userCart.products.find(
            (e) => e.product._id === productId
        );
        if (!existProductInCart)
            return res.status(404).json(PRODUCT_RESPONSE[404]);

        const productIndex = userCart.products.findIndex(
            (e) => e.product._id === productId
        );
        userCart.products.splice(productIndex, 1);
        await CARTS.updateCartById(userCart._id, userCart);

        return res.status(202).json(PRODUCT_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};

export default userCartDeleteProductController;
