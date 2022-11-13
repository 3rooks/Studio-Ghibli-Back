import REPO_USER from '#repositories/user.repository.js';

const userProfileController = async (req, res) => {
    const { id } = req;

    try {
        const existingUserById = await REPO_USER.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const { username, email, image } = existingUserById;

        return res.json({ result: { username, email, image } });
    } catch (error) {
        console.log(error);
    }
};

export default userProfileController;
