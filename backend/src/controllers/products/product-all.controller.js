import { PRODUCTS } from '#services/repositories.service.js';

const productListController = async (req, res) => {
    try {
        const results = await PRODUCTS.getAllProducts();
        return res.status(200).json({ results });
    } catch (error) {
        console.log(error);
    }
};

export default productListController;
