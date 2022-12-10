import { compareHash } from '#config/bcrypt.js';
import { USER_RESPONSE } from '#constants/response-status-json.js';
import { signAsync } from '#lib/jwt.js';
import { USERS } from '#services/repositories.service.js';

const userLoginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existUser = await USERS.getUserByEmail(email);
        if (!existUser) return res.status(401).json(USER_RESPONSE[401]);

        const checkPassword = await compareHash(password, existUser);
        if (!checkPassword) return res.status(401).json(USER_RESPONSE[401]);

        const payload = { id: existUser._id };
        const token = await signAsync(payload);

        return res.status(200).json({ token });
    } catch (error) {
        console.log(error);
    }
};

export default userLoginController;
