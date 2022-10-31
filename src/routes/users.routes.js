import userLoginController from '#controllers/user-login.controller.js';
import userProfileController from '#controllers/user-profile.controller.js';
import userRegisterController from '#controllers/user-register.controller.js';
import userUnregisterController from '#controllers/user-unregister.controller.js';
import userUpdateEmailController from '#controllers/user-update-email.controller.js';
import userUpdateImgController from '#controllers/user-update-img.controller.js';
import userUpdatePasswordController from '#controllers/user-update-password.controller.js';
import userJWTDTO from '#dto/user-jwt.dto.js';
import userLoginDTO from '#dto/user-login.dto.js';
import userRegisterDTO from '#dto/user-register.dto.js';
import userUnregisterDTO from '#dto/user-unregister.dto.js';
import userUpdateEmailDTO from '#dto/user-update-email.dto.js';
import userUpdateImgDTO from '#dto/user-update-img.dto.js';
import userUpdatePasswordDTO from '#dto/user-update-password.dto.js';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/register', userRegisterDTO, userRegisterController);
userRoutes.post('/login', userLoginDTO, userLoginController);
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

export default userRoutes;
