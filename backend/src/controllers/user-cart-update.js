import { CARTS, USERS } from '#repositories/repository.js';

const userCartUpdateController = async (req, res) => {
    const { id } = req;
    const { quantity } = req.body;
    const { productId } = req.params;

    const userId = await USERS.getUserById(id);
    if (!userId) return res.status(401).json({ error: 'User no authorized' });

    const cart = await CARTS.getCartById(userId.cart._id);

    const productInCart = cart.products.find((e) => e._id === productId);

    productInCart.quantity = quantity;

    await CARTS.updateCartById(cart._id, cart);

    res.status(200).json({ result: 'Quantity updated' });
};

export default userCartUpdateController;
