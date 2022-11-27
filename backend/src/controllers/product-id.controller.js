import { PRODUCTS } from '#repositories/repository.js';

const productIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await PRODUCTS.getProductById(id);
        if (!result)
            return res.status(404).json({ error: 'Product not found' });
        return res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
};

export default productIdController;
