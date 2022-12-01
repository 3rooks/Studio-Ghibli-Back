import { PRODUCTS } from '#services/repositories.service.js';

const resolvers = {
    Query: {
        getAllProducts: async () => {
            const results = await PRODUCTS.getAllProducts();
            return results;
        },
        getProductById: async (_, args) => {
            const { id } = args;
            const results = await PRODUCTS.getProductById(id);
            return results;
        }
    },
    Mutation: {
        createProduct: async (_, args) => {
            const { product } = args;
            const results = await PRODUCTS.saveNewProduct(product);
            return results ? 'product created' : 'error';
        },
        updateProductById: async (_, args) => {
            const { id, product } = args;
            const results = await PRODUCTS.updateProduct(id, product);
            return results ? 'product updated' : 'error';
        },
        deleteProductById: async (_, args) => {
            const { id } = args;
            const results = await PRODUCTS.deleteProductById(id);
            return results ? 'product deleted' : 'error';
        }
    }
};

export default resolvers;
