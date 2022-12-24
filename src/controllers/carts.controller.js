import {
    CART_RESPONSE,
    PRODUCT_RESPONSE,
    USER_RESPONSE
} from '#constants/response-status-json.js';
import { renderTemplate } from '#lib/ejs.js';
import { sendEmail } from '#lib/nodemailer.js';
import { createPayment } from '#lib/stripe.js';
import { CARTS, PRODUCTS, USERS } from '#services/repositories.service.js';
import { PAYMENT_PATH } from '#utils/paths.js';

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
        const { cartId, productId } = req.params;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const existProduct = await PRODUCTS.getProductById(productId);
        if (!existProduct) return res.status(404).json(PRODUCT_RESPONSE[404]);

        const userCart = await CARTS.getCartById(cartId);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);

        const existProductInCart = await userCart.products.find(
            (i) => i.product === productId || i.product._id === productId
        );
        if (existProductInCart)
            return res.status(409).json(PRODUCT_RESPONSE[409]);

        const newProduct = {
            product: existProduct._id
        };
        userCart.products.push(newProduct);
        await CARTS.updateCartById(userCart._id, userCart);

        return res.status(202).json(CART_RESPONSE[202]);
    } catch (error) {
        next(error);
    }
};

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

export const postPaymentController = async (req, res, next) => {
    try {
        const { id } = req;
        const { pmid, amount, total } = req.body;

        const paymentInfo = {
            pmid,
            amount
        };

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);
        const { username, cart, email } = existUser;

        const userCart = await CARTS.getCartById(cart);
        if (!userCart) return res.status(404).json(CART_RESPONSE[404]);
        const { products } = userCart;

        const template = await renderTemplate(PAYMENT_PATH, {
            username,
            products,
            total
        });
        await sendEmail(email, 'Payment Completed Successfully', template);

        userCart.products = [];
        await CARTS.updateCartById(cart, userCart);

        await createPayment(paymentInfo);

        return res.status(200).json({ results: 'payment succesfully' });
    } catch (error) {
        next(error);
    }
};
