import { ENTITY } from '#constants/entities.js';

/**
 * Product Repository
 */
export class ProductRepository {
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
    getAllProducts = async () => await this.persistence.getAll(this.entity);

    /**
     * Get Product By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    getProductById = async (id) =>
        await this.persistence.getById(this.entity, id);

    /**
     * Get Product By Title
     * @param title Product title
     * @returns Object | Null
     */
    getProductByTitle = async (title) =>
        await this.persistence.getBy(this.entity, { title });

    /**
     * Save New Product
     * @param product New product
     * @returns Object | Null
     */
    saveNewProduct = async (product) =>
        await this.persistence.saveOne(this.entity, product);

    /**
     * Update Product By Id
     * @param id _id(uuidv4) mongoose schema
     * @param product Product data
     * @returns Object | Null
     */
    updateProduct = async (id, product) =>
        await this.persistence.updateById(this.entity, id, product);

    /**
     * Delete Product By Id
     * @param id _id(uuidv4) mongoose schema
     * @returns Object | Null
     */
    deleteProductById = async (id) =>
        await this.persistence.deleteById(this.entity, id);
}
