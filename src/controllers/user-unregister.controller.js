import { compareHash } from '#config/bcrypt.js';
import { USERS } from '#dao/dao.js';

const userUnregisterController = async (req, res) => {
    const { id } = req;
    const { password } = req.body;

    try {
        const existingUserById = await USERS.getById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = compareHash(password, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'Wrong credentials' });

        await USERS.deleteById(id);

        return res.json({ result: 'User deleted' });
    } catch (error) {
        console.log(error);
    }
};

export default userUnregisterController;
