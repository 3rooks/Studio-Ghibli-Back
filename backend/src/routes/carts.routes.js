import {
    deleteCartController,
    getCartController,
    patchCartController,
    postCartController,
    postPaymentController
} from '#controllers/carts.controller.js';
import cartIdParamsDTO from '#dto/carts/cart-id-params.dto.js';
import patchCartDTO from '#dto/carts/cart-user-patch.dto.js';
import postCartPaymentDTO from '#dto/carts/cart-user-payment.dto.js';
import postCartBodyDTO from '#dto/carts/cart-user-post.dto.js';
import productIdParamsDTO from '#dto/products/product-get-id.dto.js';
import userAuth from '#middlewares/user-auth.middleware.js';
import { Router } from 'express';

const cartRoutes = Router();

cartRoutes.get('/carts/:cartId', userAuth, cartIdParamsDTO, getCartController);

cartRoutes.post(
    '/carts/:cartId',
    userAuth,
    cartIdParamsDTO,
    postCartBodyDTO,
    postCartController
);

cartRoutes.patch(
    '/carts/:cartId/:productId',
    userAuth,
    cartIdParamsDTO,
    productIdParamsDTO,
    patchCartDTO,
    patchCartController
);

cartRoutes.delete(
    '/carts/:cartId/:productId',
    userAuth,
    cartIdParamsDTO,
    productIdParamsDTO,
    deleteCartController
);

cartRoutes.post(
    '/carts/user/payments',
    userAuth,
    postCartPaymentDTO,
    postPaymentController
);

export default cartRoutes;
