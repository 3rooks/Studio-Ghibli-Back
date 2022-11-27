import { PRODUCTS } from '#repositories/repositories.js';

const productDeleteController = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await PRODUCTS.deleteProductById(id);
        if (!result)
            return res.status(404).json({ error: 'Product not found' });
        return res.status(200).json({ result: 'Product Deleted' });
    } catch (error) {
        console.log(error);
    }
};

export default productDeleteController;
