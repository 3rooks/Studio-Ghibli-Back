import {
    userEmailController,
    userImageController,
    userLoginController,
    userPasswordController,
    userProfileController,
    userRegisterController,
    userUnregisterController,
    userUsernameController
} from '#controllers/users.controller.js';
import userLoginDTO from '#dto/users/user-login.dto.js';
import userRegisterDTO from '#dto/users/user-register.dto.js';
import userUnregisterDTO from '#dto/users/user-unregister.dto.js';
import userEmailDTO from '#dto/users/user-update-email.dto.js';
import userImageDTO from '#dto/users/user-update-img.dto.js';
import userPasswordDTO from '#dto/users/user-update-password.dto.js';
import userUsernameDTO from '#dto/users/user-update-username.dto.js';
import { upload, uploadCloud } from '#middlewares/multer.middleware.js';
import userAuth from '#middlewares/user-auth.middleware.js';
import { Router } from 'express';

const userRoutes = Router();

userRoutes.post('/register', userRegisterDTO, userRegisterController);

userRoutes.post('/login', userLoginDTO, userLoginController);

userRoutes.get('/profile', userAuth, userProfileController);

userRoutes.patch('/update-email', userAuth, userEmailDTO, userEmailController);

userRoutes.patch(
    '/update-username',
    userAuth,
    userUsernameDTO,
    userUsernameController
);

userRoutes.patch(
    '/update-password',
    userAuth,
    userPasswordDTO,
    userPasswordController
);

userRoutes.patch(
    '/update-image',
    userAuth,
    upload,
    uploadCloud,
    userImageDTO,
    userImageController
);

userRoutes.delete(
    '/unregister',
    userAuth,
    userUnregisterDTO,
    userUnregisterController
);

export default userRoutes;
