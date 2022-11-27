import { createHash } from '#config/bcrypt.js';
import { CARTS, USERS } from '#repositories/repository.js';

const userRegisterController = async (req, res) => {
    const { username, email, password, image } = req.body;
    try {
        const existingUserByEmail = await USERS.getUserByEmail(email);
        if (existingUserByEmail)
            return res.status(409).json({ error: 'User email already exist' });

        const cart = await CARTS.createUserCart();
        const passwordHashed = await createHash(password);

        const newUser = {
            username,
            email,
            password: passwordHashed,
            image,
            cart: cart._id
        };

        await USERS.saveUser(newUser);

        return res.status(201).json({ result: 'User created' });
    } catch (error) {
        console.log(error);
    }
};

export default userRegisterController;
