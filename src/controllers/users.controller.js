import { USER_RESPONSE } from '#constants/response-status-json.js';
import { compareHash, createHash } from '#lib/bcrypt.js';
import { renderTemplate } from '#lib/ejs.js';
import { signAsync } from '#lib/jwt.js';
import { sendEmail } from '#lib/nodemailer.js';
import { CARTS, USERS } from '#services/repositories.service.js';
import { DELETE_PATH, EMAIL_PATH, REGISTER_PATH } from '#utils/paths.js';

export const userRegisterController = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        const existUser = await USERS.getUserByEmail(email);
        if (existUser) return res.status(409).json(USER_RESPONSE[409]);

        const userCart = await CARTS.createUserCart();
        const passwordHashed = await createHash(password);

        const newUser = {
            username,
            email,
            password: passwordHashed,
            cart: userCart._id
        };

        const template = await renderTemplate(REGISTER_PATH, { username });
        await sendEmail(email, 'Registered Succesfully', template);

        await USERS.registerUser(newUser);
        return res.status(201).json(USER_RESPONSE[201]);
    } catch (error) {
        next(error);
    }
};

export const userLoginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const existUser = await USERS.getUserByEmail(email);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const checkPassword = await compareHash(password, existUser);
        if (!checkPassword) return res.status(401).json(USER_RESPONSE[401]);

        const payload = { id: existUser._id };
        const token = await signAsync(payload);

        return res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};

export const userProfileController = async (req, res, next) => {
    try {
        const { id } = req;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const { username, email, image, cart } = existUser;

        return res
            .status(200)
            .json({ results: { username, email, image, cart } });
    } catch (error) {
        next(error);
    }
};

export const userUsernameController = async (req, res, next) => {
    try {
        const { id } = req;
        const { username } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        existUser.username = username;

        await USERS.updateUserById(id, existUser);
        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        next(error);
    }
};

export const userEmailController = async (req, res, next) => {
    try {
        const { id } = req;
        const { email } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);
        const { username } = existUser;

        const template = await renderTemplate(EMAIL_PATH, { username });
        await sendEmail(email, 'Email Updated Successfully', template);

        existUser.email = email;
        await USERS.updateUserById(id, existUser);

        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        next(error);
    }
};

export const userPasswordController = async (req, res, next) => {
    try {
        const { id } = req;
        const { oldPassword, newPassword } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const checkPassword = await compareHash(oldPassword, existUser);
        if (!checkPassword) return res.status(401).json(USER_RESPONSE[401]);

        existUser.password = await createHash(newPassword);
        await USERS.updateUserById(id, existUser);

        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        next(error);
    }
};

export const userUnregisterController = async (req, res, next) => {
    try {
        const { id } = req;
        const { password } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);
        const { username, email, cart } = existUser;

        const checkPassword = await compareHash(password, existUser);
        if (!checkPassword) return res.status(401).json(USER_RESPONSE[401]);

        const template = await renderTemplate(DELETE_PATH, { username });
        await sendEmail(email, 'Account Deleted Successfully', template);

        await USERS.deleteUserById(id);
        await CARTS.deleteUserCart(cart);

        return res.status(200).json(USER_RESPONSE[204]);
    } catch (error) {
        next(error);
    }
};

export const userImageController = async (req, res, next) => {
    try {
        const { id } = req;
        const { image } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        existUser.image = image;
        await USERS.updateUserById(id, existUser);

        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        next(error);
    }
};
