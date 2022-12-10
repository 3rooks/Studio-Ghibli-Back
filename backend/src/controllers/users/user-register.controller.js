import { USER_RESPONSE } from '#constants/response-status-json.js';
import { createHash } from '#lib/bcrypt.js';
import { CARTS, USERS } from '#services/repositories.service.js';

const userRegisterController = async (req, res) => {
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

        await USERS.registerUser(newUser);
        return res.status(201).json(USER_RESPONSE[201]);
    } catch (error) {
        console.log(error);
    }
};

export default userRegisterController;
