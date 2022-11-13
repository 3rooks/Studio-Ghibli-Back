import REPO_CART from '#repositories/cart.repository.js';
import REPO_PRODUCT from '#repositories/product.repository.js';
import REPO_USER from '#repositories/user.repository.js';

const userCartAddController = async (req, res) => {
    const { id } = req;
    const { product } = req.body;

    const userId = await REPO_USER.getUserById(id);
    if (!userId) return res.status(401).json({ error: 'User no authorized' });

    const productInCart = await REPO_PRODUCT.getProductById(product);
    if (!productInCart)
        return res.status(404).json({ error: 'Product not found' });

    const cart = await REPO_CART.getCartById(userId.cart._id);

    const productExist = cart.products.find((e) => e.product._id === product);
    if (productExist)
        return res.status(409).json({ error: 'Product already exist in cart' });

    const newProduct = {
        product: productInCart._id
    };

    cart.products.push(newProduct);

    await REPO_CART.updateCartById(cart._id, cart);

    return res.status(200).json({ result: 'Cart Updated' });
};
export default userCartAddController;
