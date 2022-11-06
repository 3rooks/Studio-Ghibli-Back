import upload from '#config/multer.js';
import userLoginController from '#controllers/user-login.controller.js';
import userProfileController from '#controllers/user-profile.controller.js';
import userRegisterController from '#controllers/user-register.controller.js';
import userUnregisterController from '#controllers/user-unregister.controller.js';
import userUpdateEmailController from '#controllers/user-update-email.controller.js';
import userUpdateImgController from '#controllers/user-update-img.controller.js';
import userUpdatePasswordController from '#controllers/user-update-password.controller.js';
import { CARTS, PRODUCTS, USERS } from '#dao/dao.js';
import userJWTDTO from '#dto/user-jwt.dto.js';
import userLoginDTO from '#dto/user-login.dto.js';
import multerDTO from '#dto/user-multer.dto.js';
import userRegisterDTO from '#dto/user-register.dto.js';
import userUnregisterDTO from '#dto/user-unregister.dto.js';
import userUpdateEmailDTO from '#dto/user-update-email.dto.js';
import userUpdateImgDTO from '#dto/user-update-img.dto.js';
import userUpdatePasswordDTO from '#dto/user-update-password.dto.js';
import { Router } from 'express';

const userRoutes = Router();

// Auth
userRoutes.post(
    '/register',
    upload.single('image'),
    multerDTO,
    userRegisterDTO,
    userRegisterController
);
userRoutes.post('/login', userLoginDTO, userLoginController);

// User data update
userRoutes.get('/profile', userJWTDTO, userProfileController);
userRoutes.patch(
    '/update-img',
    userJWTDTO,
    userUpdateImgDTO,
    userUpdateImgController
);
userRoutes.patch(
    '/update-email',
    userJWTDTO,
    userUpdateEmailDTO,
    userUpdateEmailController
);
userRoutes.patch(
    '/update-password',
    userJWTDTO,
    userUpdatePasswordDTO,
    userUpdatePasswordController
);
userRoutes.delete(
    '/unregister',
    userJWTDTO,
    userUnregisterDTO,
    userUnregisterController
);

// User cart update
userRoutes.get('/cart', userJWTDTO, async (req, res) => {
    const { id } = req;
    try {
        const userId = await USERS.getById(id);
        if (!userId)
            return res.status(401).json({ error: 'User no authorized' });

        res.status(200).json({ result: userId.cart });
    } catch (error) {
        console.log(error);
    }
});

userRoutes.post('/cart', userJWTDTO, async (req, res) => {
    const { id } = req;
    const { product, quantity } = req.body;

    const userId = await USERS.getById(id);
    if (!userId) return res.status(401).json({ error: 'User no authorized' });

    const cart = await CARTS.getOne(userId.cart._id);

    const a = cart.products.forEach((e, i, arr) => {
        if (arr[i].product._id === product) return e;
        return null
    });
    console.log(a);

    const productId = await PRODUCTS.getById(product);
    if (!productId) return res.status(404).json({ error: 'Product not found' });

    const newProduct = {
        product: productId._id,
        quantity
    };

    cart.products.push(newProduct);

    await CARTS.updateById(cart._id, cart);

    return res.status(200).json({ result: 'Cart Updated'});
});

export default userRoutes;
