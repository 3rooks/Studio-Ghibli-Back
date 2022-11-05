import { PRODUCTS, USERS } from '#dao/dao.js';

const userCartController = async (req, res) => {
    const { _id, quantity } = req.body;
    const { id } = req;

    try {
        const existUser = await USERS.getById(id);
        const existProduct = await PRODUCTS.getById(_id);

        if (!existUser) return res.json({ error: 'user not found' });
        if (!existProduct) return res.json({ error: 'product not found' });

        const newProduct = {
            _id,
            quantity
        };

        existUser.cart.push(newProduct);
        console.log(existUser);

        await USERS.updateCart(existUser._id, existUser.cart);

        res.status(200).json({ result: 'cart updated' });
    } catch (error) {
        console.log(error);
    }
};

export default userCartController;
