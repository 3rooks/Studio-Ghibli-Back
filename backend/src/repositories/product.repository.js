import { ENTITY } from '#constants/entities.js';

class ProductRepository {
    constructor(persistence) {
        this.entity = ENTITY.PRODUCTS;
        this.persistence = persistence;
    }

    getAllProducts = async () => {
        const result = await this.persistence.getAll(this.entity);
        return result;
    };

    getProductById = async (id) => {
        const result = await this.persistence.getById(this.entity, id);
        return result;
    };

    saveNewProduct = async (product) => {
        const result = await this.persistence.saveOne(this.entity, product);
        return result;
    };

    saveManyProducts = async (products) => {
        const result = await this.persistence.saveMany(this.entity, products);
        return result;
    };

    deleteProductById = async (id) => {
        const result = await this.persistence.deleteById(this.entity, id);
        return result;
    };
}

export default ProductRepository;
