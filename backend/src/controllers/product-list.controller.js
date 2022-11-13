import REPO_PRODUCT from '#repositories/product.repository.js';

const productListController = async (req, res) => {
    try {
        const result = await REPO_PRODUCT.getAllProducts();
        return res.status(200).json({ result });
    } catch (error) {
        console.log(error);
    }
};

export default productListController;
