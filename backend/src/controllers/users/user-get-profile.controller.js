import { USER_RESPONSE } from '#constants/response-status-json.js';
import { USERS } from '#services/repositories.service.js';

const userProfileController = async (req, res) => {
    try {
        const { id } = req;

        const existUser = await USERS.getUserById(id);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const { username, email, image, cart } = existUser;

        return res
            .status(200)
            .json({ result: { username, email, image, cart } });
    } catch (error) {
        console.log(error);
    }
};

export default userProfileController;
