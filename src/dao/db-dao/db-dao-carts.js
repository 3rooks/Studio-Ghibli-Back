import { collection, cartSchema } from '#schemas/carts.chema.js';
import Carts from '#services/db-carts.js';

class DatabaseDAO extends Carts {
    constructor() {
        super(collection, cartSchema);
    }
}

export const CARTS = new DatabaseDAO();
