import deleteCartController from '#controllers/carts/cart-user-delete.js';
import getCartController from '#controllers/carts/cart-user-get.js';
import postCartController from '#controllers/carts/cart-user-post.js';
import patchCartController from '#controllers/carts/cart-user-update.js';
import cartIdParamsDTO from '#dto/carts/cart-id-params.dto.js';
import patchCartDTO from '#dto/carts/cart-user-patch.dto.js';
import postCartBodyDTO from '#dto/carts/cart-user-post.dto.js';
import productIdParamsDTO from '#dto/products/product-get-id.dto.js';
import userAuth from '#middlewares/user-auth.middleware.js';
import { Router } from 'express';

const cartRoutes = Router();

cartRoutes.use(userAuth);

cartRoutes.get('/carts/:cartId', cartIdParamsDTO, getCartController);

cartRoutes.post(
    '/carts/:cartId',
    cartIdParamsDTO,
    postCartBodyDTO,
    postCartController
);

cartRoutes.patch(
    '/carts/:cartId/:productId',
    cartIdParamsDTO,
    productIdParamsDTO,
    patchCartDTO,
    patchCartController
);

cartRoutes.delete(
    '/carts/:cartId/:productId',
    cartIdParamsDTO,
    productIdParamsDTO,
    deleteCartController
);

export default cartRoutes;
