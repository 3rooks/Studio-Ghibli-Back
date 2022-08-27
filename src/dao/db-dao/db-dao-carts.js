import Carts from '#controllers/db-carts.js';
import { collection, cartSchema } from '#schemas/carts.chema.js';

class DatabaseDAO extends Carts {
    constructor() {
        super(collection, cartSchema);
    }
}

export const CARTS = new DatabaseDAO();
