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

        const existProduct = await PRODUCTS.getProductByTitle(title);
        if (existProduct) return res.status(409).json(PRODUCT_RESPONSE[409]);

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
