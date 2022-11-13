import REPO_USER from '#repositories/user.repository.js';

const userUpdateImgController = async (req, res) => {
    const { id } = req;
    const { pic } = req.body;

    try {
        const existingUserById = await REPO_USER.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        existingUserById.pic = pic;
        await REPO_USER.updateUserById(id, existingUserById);

        return res.json({ result: 'User img updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateImgController;
