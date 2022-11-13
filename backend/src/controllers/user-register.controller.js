import { createHash } from '#config/bcrypt.js';
import REPO_CART from '#repositories/cart.repository.js';
import REPO_USER from '#repositories/user.repository.js';

const userRegisterController = async (req, res) => {
    const { username, email, password, image } = req.body;
    console.log(username, email, password, image);
    try {
        const existingUserByEmail = await REPO_USER.getUserByEmail(email);
        console.log(existingUserByEmail);
        if (existingUserByEmail)
            return res.status(409).json({ error: 'User email already exist' });

        const cart = await REPO_CART.createUserCart();
        const passwordHashed = await createHash(password);

        const newUser = {
            username,
            email,
            password: passwordHashed,
            image,
            cart: cart._id
        };

        await REPO_USER.saveUser(newUser);
        console.log(newUser);

        return res.status(201).json({ result: 'User created' });
    } catch (error) {
        console.log(error);
    }
};

export default userRegisterController;
