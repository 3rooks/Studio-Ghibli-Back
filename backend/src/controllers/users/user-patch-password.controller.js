import { USER_RESPONSE } from '#constants/response-status-json.js';
import { compareHash, createHash } from '#lib/bcrypt.js';
import { USERS } from '#services/repositories.service.js';

const userPasswordController = async (req, res) => {
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
        console.log(error);
    }
};

export default userPasswordController;
