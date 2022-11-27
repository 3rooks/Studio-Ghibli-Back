import { USERS } from '#repositories/repository.js';

const userUpdateImgController = async (req, res) => {
    const { id } = req;
    const { image } = req.body;

    try {
        const existingUserById = await USERS.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        existingUserById.image = image;
        await USERS.updateUserById(id, existingUserById);

        return res.json({ result: 'User img updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateImgController;
