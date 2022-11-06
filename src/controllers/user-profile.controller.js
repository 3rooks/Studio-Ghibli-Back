import { USERS } from '#dao/dao.js';

const userProfileController = async (req, res) => {
    const { id } = req;

    try {
        const existingUserById = await USERS.getById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const { username, email, image, cart } = existingUserById;

        return res.json({ result: { username, email, image, cart } });
    } catch (error) {
        console.log(error);
    }
};

export default userProfileController;