import REPO_CART from '#repositories/cart.repository.js';
import REPO_USER from '#repositories/user.repository.js';

const userCartDeleteProductController = async (req, res) => {
    const { id } = req;
    const { productId } = req.params;
    const userId = await REPO_USER.getUserById(id);
    if (!userId) return res.status(401).json({ error: 'User no authorized' });

    const cart = await REPO_CART.getCartById(userId.cart._id);

    const productInCart = cart.products.find((e) => e._id === productId);
    if (!productInCart)
        return res.status(404).json({ error: 'Product not found' });

    const cartIndex = cart.products.findIndex((e) => e._id === productId);
    cart.products.splice(cartIndex, 1);

    await REPO_CART.updateCartById(cart._id, cart);

    return res.status(200).json({ result: 'Product deleted' });
};

export default userCartDeleteProductController;
