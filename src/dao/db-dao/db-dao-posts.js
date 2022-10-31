import { collection, postSchema } from '#schemas/posts.schema.js';
import Posts from '#services/db.posts.js';

class DatabaseDAO extends Posts {
    constructor() {
        super(collection, postSchema);
    }
}

export const POSTS = new DatabaseDAO();
