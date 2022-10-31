import uuid from 'uuid-random';
import { createHash } from '#config/bcrypt.js';
import { USERS } from '#dao/dao.js';

const userRegisterController = async (req, res) => {
    const { username, email, password, image } = req.body;

    try {
        const existingUserByEmail = await USERS.getByEmail(email);
        if (existingUserByEmail)
            return res.status(409).json({ error: 'User email already exist' });

        const existingUserByUsername = await USERS.getByUsername(username);
        if (existingUserByUsername)
            return res
                .status(409)
                .json({ error: 'User username already exist' });

        const newUser = {
            _id: uuid(),
            username,
            email,
            password: createHash(password),
            image,
            cart: []
        };
        await USERS.saveOne(newUser);

        return res.status(201).json({ result: 'User created' });
    } catch (error) {
        console.log(error);
    }
};

export default userRegisterController;
