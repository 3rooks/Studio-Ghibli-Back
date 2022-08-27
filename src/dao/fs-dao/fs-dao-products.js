import Products from '#controllers/fs-products.js';

class FilesystemDAO extends Products {
    constructor() {
        super();
        this.connection = this.connection();
    }

    connection() {
        console.log('persistence/connected - fs:filesystem');
    }
}

export const PRODUCTS = new FilesystemDAO();
