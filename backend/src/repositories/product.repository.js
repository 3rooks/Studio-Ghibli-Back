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
        const results = await this.persistence.getAll(this.entity);
        return results;
    };

    /**
     * Get Product By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    getProductById = async (id) => {
        const results = await this.persistence.getById(this.entity, id);
        return results;
    };

    /**
     * Get Product By Title
     * @param title Product title
     * @returns Object | Null
     */
    getProductByTitle = async (title) => {
        const results = await this.persistence.getBy(this.entity, { title });
        return results;
    };

    /**
     * Save New Product
     * @param product New product
     * @returns Object | Null
     */
    saveNewProduct = async (product) => {
        const results = await this.persistence.saveOne(this.entity, product);
        return results;
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
        const results = await this.persistence.deleteById(this.entity, id);
        return results;
    };
}

export default ProductRepository;
