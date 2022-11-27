import userCartDeleteProductController from '#controllers/user-cart-delete.js';
import cartUserController from '#controllers/user-cart-list.js';
import userCartAddController from '#controllers/user-cart-push.js';
import userCartUpdateController from '#controllers/user-cart-update.js';
import userCartDTO from '#dto/user-cart-add.dto.js';
import {
    userCartBodyDTO,
    userCartParamsDTO
} from '#dto/user-cart-update.dto.js';
import userJWTDTO from '#dto/user-jwt.dto.js';
import { Router } from 'express';

const cartRoutes = Router();

// User cart update
cartRoutes.get('/carts', userJWTDTO, cartUserController);

cartRoutes.post('/carts', userJWTDTO, userCartDTO, userCartAddController);

// FIX THIS
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
