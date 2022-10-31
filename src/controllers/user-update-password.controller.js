import { compareHash, createHash } from '#config/bcrypt.js';
import { USERS } from '#dao/dao.js';

const userUpdatePasswordController = async (req, res) => {
    const { id } = req;
    const { oldPassword, newPassword } = req.body;

    try {
        const existingUserById = await USERS.getById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = compareHash(oldPassword, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'Wrong credentials' });

        existingUserById.password = createHash(newPassword);
        await USERS.updateById(id, existingUserById);

        return res.json({ result: 'User password updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdatePasswordController;
