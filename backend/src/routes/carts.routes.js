import {
    deleteCartController,
    getCartController,
    postCartController,
    postPaymentController
} from '#controllers/carts.controller.js';
import cartIdParamsDTO from '#dto/carts/cart-id-params.dto.js';
import postCartPaymentDTO from '#dto/carts/cart-user-payment.dto.js';
import productIdParamsDTO from '#dto/products/product-get-id.dto.js';
import userAuth from '#middlewares/user-auth.middleware.js';
import { Router } from 'express';

const cartRoutes = Router();

cartRoutes.get('/carts/:cartId', userAuth, cartIdParamsDTO, getCartController);

cartRoutes.post(
    '/carts/:cartId/:productId',
    userAuth,
    cartIdParamsDTO,
    productIdParamsDTO,
    postCartController
);

cartRoutes.delete(
    '/carts/:cartId/:productId',
    userAuth,
    cartIdParamsDTO,
    productIdParamsDTO,
    deleteCartController
);

cartRoutes.post(
    '/carts/payments-products',
    userAuth,
    postCartPaymentDTO,
    postPaymentController
);

export default cartRoutes;
