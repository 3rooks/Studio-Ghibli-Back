import { compareHash, createHash } from '#config/bcrypt.js';
import { USERS } from '#repositories/repository.js';

const userUpdatePasswordController = async (req, res) => {
    const { id } = req;
    const { oldPassword, newPassword } = req.body;

    try {
        const existingUserById = await USERS.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = await compareHash(oldPassword, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'User no authorized' });

        existingUserById.password = await createHash(newPassword);
        await USERS.updateUserById(id, existingUserById);

        return res.status(200).json({ result: 'User password updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdatePasswordController;
