import { compareHash } from '#config/bcrypt.js';
import REPO_USER from '#repositories/user.repository.js';
import { signAsync } from '#services/jwt.service.js';

const userLoginController = async (req, res) => {
    const { email, password } = req.body;
    console.log(password);
    try {
        const existingUserByEmail = await REPO_USER.getUserByEmail(email);
        if (!existingUserByEmail)
            return res.status(401).json({ error: 'Wrong credentials' });

        const checkPassword = await compareHash(password, existingUserByEmail);
        if (!checkPassword)
            return res.status(401).json({ error: 'Wrong credentials' });

        const payload = { id: existingUserByEmail._id };
        const signOptions = { algorithm: 'HS512', expiresIn: '7d' };
        const token = await signAsync(payload, signOptions);

        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
    }
};

export default userLoginController;
