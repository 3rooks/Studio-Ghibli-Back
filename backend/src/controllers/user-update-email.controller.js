import { compareHash } from '#config/bcrypt.js';
import REPO_USER from '#repositories/user.repository.js';

const userUpdateEmailController = async (req, res) => {
    const { id } = req;
    const { email, password } = req.body;

    try {
        const existingUserById = await REPO_USER.getUserById(id);
        if (!existingUserById)
            return res.status(401).json({ error: 'User no authorized' });

        const checkPassword = await compareHash(password, existingUserById);
        if (!checkPassword)
            return res.status(401).json({ error: 'Wrong credentials' });

        existingUserById.email = email;
        await REPO_USER.updateUserById(id, existingUserById);

        return res.json({ result: 'User email updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userUpdateEmailController;
