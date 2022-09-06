import Posts from '#controllers/db.posts.js';
import { collection, postSchema } from '#schemas/posts.schema.js';

class DatabaseDAO extends Posts {
    constructor() {
        super(collection, postSchema);
    }
}

export const POSTS = new DatabaseDAO();
