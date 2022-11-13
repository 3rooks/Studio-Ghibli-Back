import { ENTITY } from '#constants/entities.js';
import MONGO_SERVICE from '#dao/mongo-db.dao.js';

class ProductRepository {
    constructor() {
        this.entity = ENTITY.PRODUCTS;
        this.persistence = MONGO_SERVICE;
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

const REPO_PRODUCT = new ProductRepository();

export default REPO_PRODUCT;
