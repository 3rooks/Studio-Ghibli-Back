import { compareHash } from '#config/bcrypt.js';
import { USERS } from '#dao/dao.js';

const userUpdateEmailController = async (req, res) => {
    const { id } = req;
    const { email, password } = req.body;

    try {
        const existingUserById = await USERS.getById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = compareHash(password, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'Wrong credentials' });

        existingUserById.email = email;
        await USERS.updateById(id, existingUserById);

        return res.json({ result: 'User email updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateEmailController;
