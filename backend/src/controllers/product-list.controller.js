import { PRODUCTS } from '#repositories/repositories.js';

const productListController = async (req, res) => {
    try {
        const result = await PRODUCTS.getAllProducts();
        return res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
};

export default productListController;
