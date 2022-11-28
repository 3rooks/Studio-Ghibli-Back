import userProfileController from '#controllers/users/user-get-profile.controller.js';
import userLoginController from '#controllers/users/user-login.controller.js';
import userEmailController from '#controllers/users/user-patch-email.controller.js';
import userImageController from '#controllers/users/user-patch-img.controller.js';
import userPasswordController from '#controllers/users/user-patch-password.controller.js';
import userUsernameController from '#controllers/users/user-patch-username.controller.js';
import userRegisterController from '#controllers/users/user-register.controller.js';
import userUnregisterController from '#controllers/users/user-unregister.controller.js';
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

userRoutes.use(userAuth);

userRoutes.get('/profile', userProfileController);

userRoutes.patch('/update-username', userUsernameDTO, userUsernameController);

userRoutes.patch('/update-email', userEmailDTO, userEmailController);

userRoutes.patch('/update-password', userPasswordDTO, userPasswordController);

userRoutes.patch(
    '/update-img',
    upload,
    uploadCloud,
    userImageDTO,
    userImageController
);

userRoutes.delete('/unregister', userUnregisterDTO, userUnregisterController);

export default userRoutes;
