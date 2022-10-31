import { PRODUCTS } from '#dao/dao.js';

const productListController = async (req, res) => {
    try {
        const result = await PRODUCTS.getAll();
        return res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
};

export default productListController;
