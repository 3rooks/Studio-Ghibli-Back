import Users from '#controllers/db-users.js';
import { collection, userSchema } from '#schemas/users.schema.js';

class DatabaseDAO extends Users {
    constructor() {
        super(collection, userSchema);
    }
}

export const USERS = new DatabaseDAO();
