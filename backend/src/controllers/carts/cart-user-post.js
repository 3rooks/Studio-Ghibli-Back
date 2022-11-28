import {
    CART_RESPONSE,
    PRODUCT_RESPONSE,
    USER_RESPONSE
} from '#constants/response-status-json.js';
import { CARTS, PRODUCTS, USERS } from '#services/repositories.service.js';

const postCartController = async (req, res) => {
    try {
        const { id } = req;
        const { product, quantity } = req.body;
        const { cartId } = req.params;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const existProduct = await PRODUCTS.getProductById(product);
        if (!existProduct) return res.status(404).json(PRODUCT_RESPONSE[404]);

        const userCart = await CARTS.getCartById(cartId);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);

        const existProductInCart = await userCart.products.find(
            (i) => i.product._id === product
        );

        if (existProductInCart)
            return res.status(409).json(PRODUCT_RESPONSE[409]);

        const newProduct = {
            product: existProduct._id,
            quantity
        };
        userCart.products.push(newProduct);
        await CARTS.updateCartById(userCart._id, userCart);

        return res.status(202).json(CART_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};
export default postCartController;
