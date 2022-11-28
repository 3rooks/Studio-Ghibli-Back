import { compareHash } from '#config/bcrypt.js';
import { USER_RESPONSE } from '#constants/response-status-json.js';
import { CARTS, USERS } from '#repositories/repositories.js';

const userUnregisterController = async (req, res) => {
    try {
        const { id } = req;
        const { password } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const checkPassword = await compareHash(password, existUser);
        if (!checkPassword) return res.status(401).json(USER_RESPONSE[401]);

        await USERS.deleteUserById(id);
        await CARTS.deleteUserCart(existUser.cart);

        return res.status(204);
    } catch (error) {
        console.log(error);
    }
};

export default userUnregisterController;
