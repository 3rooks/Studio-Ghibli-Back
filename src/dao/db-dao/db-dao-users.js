import { collection, userSchema } from '#schemas/users.schema.js';
import Users from '#services/db-users.js';

class DatabaseDAO extends Users {
    constructor() {
        super(collection, userSchema);
    }
}

export const USERS = new DatabaseDAO();
