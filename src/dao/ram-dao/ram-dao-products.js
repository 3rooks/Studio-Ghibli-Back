import Products from '#controllers/ram-products.js';

class RamDAO extends Products {
    constructor() {
        super();
        this.connection = this.connection();
    }

    connection() {
        console.log('persistence/connected - ram:online');
    }
}

export const PRODUCTS = new RamDAO();
