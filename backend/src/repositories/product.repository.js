import { ENTITY } from '#constants/entities.js';

/**
 * Product Repository
 */
class ProductRepository {
    /**
     * Constructor
     * @param persistence application persistence
     */
    constructor(persistence) {
        this.entity = ENTITY.PRODUCTS;
        this.persistence = persistence;
    }

    /**
     * Get All Products
     * @returns Array | Null
     */
    getAllProducts = async () => {
        const result = await this.persistence.getAll(this.entity);
        return result;
    };

    /**
     * Get Product By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    getProductById = async (id) => {
        const result = await this.persistence.getById(this.entity, id);
        return result;
    };

    /**
     * Save New Product
     * @param product New product
     * @returns Object | Null
     */
    saveNewProduct = async (product) => {
        const result = await this.persistence.saveOne(this.entity, product);
        return result;
    };

    /**
     * Update Product By Id
     * @param id _id(uuidv4) mongoose schema
     * @param product Product data
     * @returns Object | Null
     */
    updateProduct = async (id, product) => {
        const results = await this.persistence.updateById(
            this.entity,
            id,
            product
        );
        return results;
    };

    /**
     * Delete Product By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteProductById = async (id) => {
        const result = await this.persistence.deleteById(this.entity, id);
        return result;
    };
}

export default ProductRepository;
