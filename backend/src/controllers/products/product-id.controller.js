import { PRODUCT_RESPONSE } from '#constants/response-status-json.js';
import { PRODUCTS } from '#repositories/repositories.js';

const productIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const existProductById = await PRODUCTS.getProductById(id);
        if (!existProductById)
            return res.status(404).json(PRODUCT_RESPONSE[404]);

        return res.status(200).json({ results: existProductById });
    } catch (error) {
        console.log(error);
    }
};

export default productIdController;
