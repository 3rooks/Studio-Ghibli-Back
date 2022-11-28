import userLoginController from '#controllers/users/user-login.controller.js';
import userProfileController from '#controllers/users/user-profile.controller.js';
import userRegisterController from '#controllers/users/user-register.controller.js';
import userUnregisterController from '#controllers/users/user-unregister.controller.js';
import userUpdateEmailController from '#controllers/users/user-update-email.controller.js';
import userUpdateImgController from '#controllers/users/user-update-img.controller.js';
import userUpdatePasswordController from '#controllers/users/user-update-password.controller.js';
import userJWTDTO from '#dto/users/user-jwt.dto.js';
import userLoginDTO from '#dto/users/user-login.dto.js';
import userRegisterDTO from '#dto/users/user-register.dto.js';
import userUnregisterDTO from '#dto/users/user-unregister.dto.js';
import userUpdateEmailDTO from '#dto/users/user-update-email.dto.js';
import userUpdateImgDTO from '#dto/users/user-update-img.dto.js';
import userUpdatePasswordDTO from '#dto/users/user-update-password.dto.js';
import { upload, uploadCloud } from '#middlewares/multer-middleware.js';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/register', userRegisterDTO, userRegisterController);

userRoutes.post('/login', userLoginDTO, userLoginController);

userRoutes.get('/profile', userJWTDTO, userProfileController);

userRoutes.patch(
    '/update-img',
    userJWTDTO,
    upload,
    uploadCloud,
    userUpdateImgDTO,
    userUpdateImgController
);

userRoutes.patch('/update-username');

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
