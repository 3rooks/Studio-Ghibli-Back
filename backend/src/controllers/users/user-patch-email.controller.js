import { USER_RESPONSE } from '#constants/response-status-json.js';
import { USERS } from '#services/repositories.service.js';

const userEmailController = async (req, res) => {
    try {
        const { id } = req;
        const { email } = req.body;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        existUser.email = email;
        await USERS.updateUserById(id, existUser);

        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};

export default userEmailController;
