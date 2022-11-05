import Carts from '#services/db-carts.js';
import { collection, cartSchema } from '#schemas/carts.schema.js';

class DatabaseDAO extends Carts {
    constructor() {
        super(collection, cartSchema);
    }
}

export const CARTS = new DatabaseDAO();
