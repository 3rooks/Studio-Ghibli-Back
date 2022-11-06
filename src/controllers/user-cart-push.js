import { CARTS, PRODUCTS, USERS } from '#dao/dao.js';

const userCartAddController = async (req, res) => {
    const { id } = req;
    const { product } = req.body;

    const userId = await USERS.getById(id);
    if (!userId) return res.status(401).json({ error: 'User no authorized' });

    const productInCart = await PRODUCTS.getById(product);
    if (!productInCart)
        return res.status(404).json({ error: 'Product not found' });

    const cart = await CARTS.getOne(userId.cart._id);

    const productExist = cart.products.find((e) => e.product._id === product);
    if (productExist)
        return res.status(409).json({ error: 'Product already exist in cart' });

    const newProduct = {
        product: productInCart._id
    };

    cart.products.push(newProduct);

    await CARTS.updateById(cart._id, cart);

    return res.status(200).json({ result: 'Cart Updated' });
};
export default userCartAddController;
