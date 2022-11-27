import { USERS } from '#repositories/repositories.js';

const userProfileController = async (req, res) => {
    const { id } = req;

    try {
        const existingUserById = await USERS.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const { username, email, image } = existingUserById;

        return res.status(200).json({ result: { username, email, image } });
    } catch (error) {
        console.log(error);
    }
};

export default userProfileController;
