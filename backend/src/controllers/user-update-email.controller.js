import REPO_USER from '#repositories/user.repository.js';

const userUpdateEmailController = async (req, res) => {
    const { id } = req;
    const { email } = req.body;

    try {
        const existingUserById = await REPO_USER.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        existingUserById.email = email;
        await REPO_USER.updateUserById(id, existingUserById);

        return res.status(200).json({ result: 'User email updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateEmailController;
