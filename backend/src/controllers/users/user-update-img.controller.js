import { USER_RESPONSE } from '#constants/response-status-json.js';
import { USERS } from '#repositories/repositories.js';

const userUpdateImgController = async (req, res) => {
    try {
        const { id } = req;
        const { image } = req.body;

        const existingUserById = await USERS.getUserById(id);
        if (!existingUserById) return res.status(401).json(USER_RESPONSE[401]);

        existingUserById.image = image;
        await USERS.updateUserById(id, existingUserById);

        return res.status(202).json(USER_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateImgController;
