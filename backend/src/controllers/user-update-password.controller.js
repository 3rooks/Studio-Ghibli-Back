import { compareHash, createHash } from '#config/bcrypt.js';
import REPO_USER from '#repositories/user.repository.js';

const userUpdatePasswordController = async (req, res) => {
    const { id } = req;
    const { oldPassword, newPassword } = req.body;

    try {
        const existingUserById = await REPO_USER.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = await compareHash(oldPassword, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'User no authorized' });

        existingUserById.password = await createHash(newPassword);
        await REPO_USER.updateUserById(id, existingUserById);

        return res.status(200).json({ result: 'User password updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdatePasswordController;
