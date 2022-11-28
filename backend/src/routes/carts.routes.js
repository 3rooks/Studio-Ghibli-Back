import userCartDeleteProductController from '#controllers/carts/cart-user-delete.js';
import getUserCartController from '#controllers/carts/cart-user-get.js';
import userCartAddProductController from '#controllers/carts/cart-user-push.js';
import userCartUpdateController from '#controllers/carts/cart-user-update.js';
import userCartBodyDTO from '#dto/carts/user-cart-add.dto.js';
import { userCartIdParamsDTO } from '#dto/carts/user-cart-get.dto.js';
import { userCartIdProductIdParamsDTO } from '#dto/carts/user-cart-path.dto.js';
import userCartQuantityBodyDTO from '#dto/carts/user-cart-quantity.dto.js';
import userJWTDTO from '#dto/users/user-jwt.dto.js';
import { Router } from 'express';

const cartRoutes = Router();

cartRoutes.get(
    '/carts/:cartId',
    userJWTDTO,
    userCartIdParamsDTO,
    getUserCartController
);

cartRoutes.post(
    '/carts/:cartId',
    userJWTDTO,
    userCartIdParamsDTO,
    userCartBodyDTO,
    userCartAddProductController
);

cartRoutes.patch(
    '/carts/:cartId/:productId',
    userJWTDTO,
    userCartIdProductIdParamsDTO,
    userCartQuantityBodyDTO,
    userCartUpdateController
);

cartRoutes.delete(
    '/carts/:cartId/:productId',
    userJWTDTO,
    userCartIdProductIdParamsDTO,
    userCartDeleteProductController
);

export default cartRoutes;
