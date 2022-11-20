import expressApp from '#config/express.js';
import { MongoDataBase } from '#dao/mongo-db.dao.js';
import { DB_TEST, PORT_TEST } from '#test/utils/test.env.js';
import { createServer } from 'http';

const setupTests = (test) => {
    let db;
    const serverTest = createServer(expressApp);

    test.before(async () => {
        try {
            serverTest.listen(PORT_TEST, () => {
                console.log(`testing on port ${PORT_TEST}`);
            });

            const mongo = new MongoDataBase();
            db = await mongo.connection(DB_TEST);
        } catch (error) {
            console.log(error);
        }
    });

    test.after.always(async () => {
        if (db) {
            await db.disconnect();
            serverTest.close();
        }
    });
};

export default setupTests;
