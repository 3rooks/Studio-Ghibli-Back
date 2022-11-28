import userCartDeleteProductController from '#controllers/carts/user-cart-delete.js';
import getUserCartController from '#controllers/carts/user-cart-get.js';
import userCartAddController from '#controllers/carts/user-cart-push.js';
import userCartUpdateController from '#controllers/carts/user-cart-update.js';
import userCartDTO from '#dto/carts/user-cart-add.dto.js';
import { userGetCartParamsDTO } from '#dto/carts/user-cart-get.dto.js';
import {
    userCartBodyDTO,
    userCartParamsDTO
} from '#dto/carts/user-cart-update.dto.js';
import userJWTDTO from '#dto/users/user-jwt.dto.js';
import { Router } from 'express';

const cartRoutes = Router();

cartRoutes.get(
    '/carts/:cartId',
    userJWTDTO,
    userGetCartParamsDTO,
    getUserCartController
);

cartRoutes.post(
    '/carts/:cartId',
    userJWTDTO,
    userGetCartParamsDTO,
    userCartDTO,
    userCartAddController
);

cartRoutes.patch(
    '/carts/:productId',
    userJWTDTO,
    userCartParamsDTO,
    userCartBodyDTO,
    userCartUpdateController
);

cartRoutes.delete(
    '/carts/:productId',
    userJWTDTO,
    userCartParamsDTO,
    userCartDeleteProductController
);

export default cartRoutes;
