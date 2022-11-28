import { compareHash } from '#config/bcrypt.js';
import { USER_RESPONSE } from '#constants/response-status-json.js';
import { USERS } from '#repositories/repositories.js';
import { signAsync } from '#services/jwt.service.js';

const userLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existUserByEmail = await USERS.getUserByEmail(email);
        if (!existUserByEmail) return res.status(401).json(USER_RESPONSE[401]);

        const checkPassword = await compareHash(password, existUserByEmail);
        if (!checkPassword) return res.status(401).json(USER_RESPONSE[401]);

        const payload = { id: existUserByEmail._id };
        const signOptions = { algorithm: 'HS512', expiresIn: '7d' };
        const token = await signAsync(payload, signOptions);

        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
    }
};

export default userLoginController;
