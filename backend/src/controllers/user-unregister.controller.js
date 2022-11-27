import { compareHash } from '#config/bcrypt.js';
import REPO_USER from '#repositories/user.repository.js';

const userUnregisterController = async (req, res) => {
    const { id } = req;
    const { password } = req.body;

    try {
        const existingUserById = await REPO_USER.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = await compareHash(password, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'User no authorized' });

        await REPO_USER.deleteUserById(id);

        return res.status(200).json({ result: 'User deleted' });
    } catch (error) {
        console.log(error);
    }
};

export default userUnregisterController;
