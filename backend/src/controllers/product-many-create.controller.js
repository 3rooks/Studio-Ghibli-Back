import { PRODUCTS } from '#repositories/repository.js';

const manyProductCreateController = async (req, res) => {
    try {
        await PRODUCTS.saveManyProducts(req.body);
        return res.status(201).json({ result: 'Products Created' });
    } catch (error) {
        return res.status(409).json({ error: 'Some product already exist' });
    }
};

export default manyProductCreateController;
