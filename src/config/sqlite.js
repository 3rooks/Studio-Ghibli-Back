import knex from 'knex';
import { DB_PATH } from '#utils/paths.js';
import cartsSchema from '#schemas/carts.schema.js';
import messagesSchema from '#schemas/messages.schema.js';
import productsSchema from '#schemas/products.schema.js';

const options = {
    client: 'sqlite3',
    connection: {
        filename: DB_PATH
    },
    useNullAsDefault: true
};

const db = knex(options);

try {
    await db.schema.createTable('products', productsSchema);
    await db.schema.createTable('carts', cartsSchema);
    await db.schema.createTable('messages', messagesSchema);
} catch (err) {
    console.log(err);
}

export default db;
