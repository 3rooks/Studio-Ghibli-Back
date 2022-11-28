import { USER_RESPONSE } from '#constants/response-status-json.js';
import { USERS } from '#services/repositories.service.js';

const userUpdateEmailController = async (req, res) => {
    try {
        const { id } = req;
        const { email } = req.body;

        const existingUserById = await USERS.getUserById(id);
        if (!existingUserById) return res.status(401).json(USER_RESPONSE[401]);

        existingUserById.email = email;
        await USERS.updateUserById(id, existingUserById);

        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateEmailController;
