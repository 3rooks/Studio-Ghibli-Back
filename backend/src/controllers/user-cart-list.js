import REPO_CART from '#repositories/cart.repository.js';
import REPO_USER from '#repositories/user.repository.js';

const cartUserController = async (req, res) => {
    const { id } = req;
    try {
        const userId = await REPO_USER.getUserById(id);
        if (!userId)
            return res.status(401).json({ error: 'User no authorized' });

        const cart = await REPO_CART.getCartById(userId.cart._id);

        res.status(200).json({ result: cart });
    } catch (error) {
        console.log(error);
    }
};

export default cartUserController;
