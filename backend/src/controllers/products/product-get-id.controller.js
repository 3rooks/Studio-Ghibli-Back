import { PRODUCT_RESPONSE } from '#constants/response-status-json.js';
import { PRODUCTS } from '#services/repositories.service.js';

const getProductIdController = async (req, res) => {
    try {
        const { productId } = req.params;

        const existProduct = await PRODUCTS.getProductById(productId);
        if (!existProduct) return res.status(404).json(PRODUCT_RESPONSE[404]);

        return res.status(200).json({ results: existProduct });
    } catch (error) {
        console.log(error);
    }
};

export default getProductIdController;
