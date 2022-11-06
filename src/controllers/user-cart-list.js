import { USERS } from '#dao/dao.js';

const cartUserController = async (req, res) => {
    const { id } = req;
    try {
        const userId = await USERS.getById(id);
        if (!userId)
            return res.status(401).json({ error: 'User no authorized' });

        res.status(200).json({ result: userId.cart });
    } catch (error) {
        console.log(error);
    }
};

export default cartUserController;
