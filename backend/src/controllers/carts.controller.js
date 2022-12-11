import {
    CART_RESPONSE,
    PRODUCT_RESPONSE,
    USER_RESPONSE
} from '#constants/response-status-json.js';
import { CARTS, PRODUCTS, USERS } from '#services/repositories.service.js';

export const deleteCartController = async (req, res, next) => {
    try {
        const { id } = req;
        const { cartId, productId } = req.params;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const userCart = await CARTS.getCartById(cartId);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);

        const existProductInCart = userCart.products.find(
            (i) => i.product === productId || i.product._id === productId
        );
        if (!existProductInCart)
            return res.status(404).json(PRODUCT_RESPONSE[404]);

        const productIndex = userCart.products.findIndex(
            (i) => i.product === productId || i.product._id === productId
        );
        userCart.products.splice(productIndex, 1);
        await CARTS.updateCartById(userCart._id, userCart);

        return res.status(202).json(CART_RESPONSE[202]);
    } catch (error) {
        next(error);
    }
};

export const getCartController = async (req, res, next) => {
    try {
        const { id } = req;
        const { cartId } = req.params;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const userCart = await CARTS.getCartById(cartId);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);

        return res.status(200).json({ results: userCart });
    } catch (error) {
        next(error);
    }
};

export const postCartController = async (req, res, next) => {
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
            (i) => i.product === product || i.product._id === product
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
        next(error);
    }
};

export const patchCartController = async (req, res, next) => {
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
        next(error);
    }
};
