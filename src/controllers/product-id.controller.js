import { PRODUCTS } from '#dao/dao.js';

const productIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await PRODUCTS.getById(id);
        return res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
};

export default productIdController;
