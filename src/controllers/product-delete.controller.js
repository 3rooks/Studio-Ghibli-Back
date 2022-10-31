import { PRODUCTS } from '#dao/dao.js';

const productDeleteController = async (req, res) => {
    const { id } = req.params;

    try {
        await PRODUCTS.deleteById(id);
        return res.status(200).json({ result: 'Product Deleted' });
    } catch (error) {
        console.log(error);
    }
};

export default productDeleteController;
