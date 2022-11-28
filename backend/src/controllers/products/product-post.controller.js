import { PRODUCT_RESPONSE } from '#constants/response-status-json.js';
import { PRODUCTS } from '#services/repositories.service.js';

const postProductController = async (req, res) => {
    try {
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

        await PRODUCTS.saveNewProduct(newProduct);
        return res.status(201).json(PRODUCT_RESPONSE[201]);
    } catch (error) {
        console.log(error);
    }
};

export default postProductController;
