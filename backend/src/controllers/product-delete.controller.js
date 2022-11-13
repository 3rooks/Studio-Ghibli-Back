import REPO_PRODUCT from '#repositories/product.repository.js';

const productDeleteController = async (req, res) => {
    const { id } = req.params;

    try {
        await REPO_PRODUCT.deleteProductById(id);
        return res.status(200).json({ result: 'Product Deleted' });
    } catch (error) {
        console.log(error);
    }
};

export default productDeleteController;
