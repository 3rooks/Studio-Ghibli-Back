import { PRODUCTS } from '#repositories/repositories.js';

const productCreateController = async (req, res) => {
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

    try {
        await PRODUCTS.saveNewProduct(newProduct);
        return res.status(201).json({ result: 'Product Created' });
    } catch (error) {
        console.log(error);
    }
};

export default productCreateController;
