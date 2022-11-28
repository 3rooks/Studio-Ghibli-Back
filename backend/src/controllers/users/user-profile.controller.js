import { USER_RESPONSE } from '#constants/response-status-json.js';
import { USERS } from '#repositories/repositories.js';

const userProfileController = async (req, res) => {
    try {
        const { id } = req;

        const existUserById = await USERS.getUserById(id);
        if (!existUserById) return res.status(401).json(USER_RESPONSE[401]);

        const { username, email, image, cart } = existUserById;

        return res
            .status(200)
            .json({ result: { username, email, image, cart } });
    } catch (error) {
        console.log(error);
    }
};

export default userProfileController;
