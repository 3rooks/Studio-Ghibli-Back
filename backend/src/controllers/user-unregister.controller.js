import { compareHash } from '#config/bcrypt.js';
import { USERS } from '#repositories/repository.js';

const userUnregisterController = async (req, res) => {
    const { id } = req;
    const { password } = req.body;

    try {
        const existingUserById = await USERS.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = await compareHash(password, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'User no authorized' });

        await USERS.deleteUserById(id);

        return res.status(200).json({ result: 'User deleted' });
    } catch (error) {
        console.log(error);
    }
};

export default userUnregisterController;
