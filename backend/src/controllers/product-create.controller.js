import REPO_PRODUCT from '#repositories/product.repository.js';

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
        await REPO_PRODUCT.saveNewProduct(newProduct);
        return res.status(201).json({ result: 'Product Created' });
    } catch (error) {
        console.log(error);
    }
};

export default productCreateController;
