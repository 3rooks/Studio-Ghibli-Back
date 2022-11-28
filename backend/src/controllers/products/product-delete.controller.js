import { PRODUCT_RESPONSE } from '#constants/response-status-json.js';
import { PRODUCTS } from '#repositories/repositories.js';

const productDeleteController = async (req, res) => {
    try {
        const { id } = req.params;

        const existProductById = await PRODUCTS.deleteProductById(id);
        if (!existProductById)
            return res.status(404).json(PRODUCT_RESPONSE[404]);

        return res.status(204);
    } catch (error) {
        console.log(error);
    }
};

export default productDeleteController;
