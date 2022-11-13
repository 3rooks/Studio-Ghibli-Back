import REPO_PRODUCT from '#repositories/product.repository.js';

const productIdController = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await REPO_PRODUCT.getProductById(id);
        return res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
};

export default productIdController;
