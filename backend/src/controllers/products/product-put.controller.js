import { PRODUCT_RESPONSE } from '#constants/response-status-json.js';
import { PRODUCTS } from '#services/repositories.service.js';

const putProductController = async (req, res) => {
    try {
        const { productId } = req.params;

        const {
            title,
            originalTitle,
            originalTitleRomanised,
            image,
            description,
            director,
            producer,
            releaseYear,
            minDuration,
            info,
            price
        } = req.body;

        const existProduct = await PRODUCTS.getProductById(productId);
        if (!existProduct) return res.status(404).json(PRODUCT_RESPONSE[404]);

        const newProduct = {
            title,
            originalTitle,
            originalTitleRomanised,
            image,
            description,
            director,
            producer,
            releaseYear,
            minDuration,
            info,
            price
        };

        await PRODUCTS.updateProduct(productId, newProduct);
        return res.status(202).json(PRODUCT_RESPONSE[202]);
    } catch (error) {
        console.log(error);
    }
};

export default putProductController;
