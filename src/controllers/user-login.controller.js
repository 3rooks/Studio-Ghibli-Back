import { compareHash } from '#config/bcrypt.js';
import { USERS } from '#dao/dao.js';
import { signAsync } from '#lib/jwt.service.js';

const userLoginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUserByEmail = await USERS.getByEmail(email);
        if (!existingUserByEmail)
            return res.status(401).json({ error: 'Wrong credentials' });

        const checkPassword = compareHash(password, existingUserByEmail);
        if (!checkPassword)
            return res.status(401).json({ error: 'Wrong credentials' });

        const payload = { id: existingUserByEmail._id };
        const signOptions = { algorithm: 'HS512', expiresIn: '7d' };
        const token = await signAsync(payload, signOptions);

        return res.json({ token });
    } catch (error) {
        console.log(error);
    }
};

export default userLoginController;
