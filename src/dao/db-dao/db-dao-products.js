import connectDB from '#config/db.js';
import Products from '#controllers/db-products.js';
import { collection, productSchema } from '#schemas/products.schema.js';

class DatabaseDAO extends Products {
    constructor() {
        super(collection, productSchema);
        this.connection = this.connection();
    }

    async connection() {
        await connectDB(process.env.MONGODB_URL);
    }
}

export const PRODUCTS = new DatabaseDAO();
