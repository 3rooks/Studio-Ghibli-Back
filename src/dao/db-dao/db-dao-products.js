import connectDB from '#config/db.js';
import { collection, productSchema } from '#schemas/products.schema.js';
import Products from '#services/db-products.js';

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
