import { compareHash, createHash } from '#config/bcrypt.js';
import { USER_RESPONSE } from '#constants/response-status-json.js';
import { USERS } from '#services/repositories.service.js';

const userUpdatePasswordController = async (req, res) => {
    try {
        const { id } = req;
        const { oldPassword, newPassword } = req.body;

        const existingUserById = await USERS.getUserById(id);
        if (!existingUserById) return res.status(401).json(USER_RESPONSE[401]);

        const checkPassword = await compareHash(oldPassword, existingUserById);
        if (!checkPassword) return res.status(401).json(USER_RESPONSE[401]);

        existingUserById.password = await createHash(newPassword);
        await USERS.updateUserById(id, existingUserById);

        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};

export default userUpdatePasswordController;
