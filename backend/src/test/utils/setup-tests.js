import expressApp from '#config/express.js';
import { MongoDataBase } from '#dao/mongo-db.dao.js';
import { createServer } from 'http';

export const PORT_TEST = 8081;
const URL = process.env.DB_TEST || 'mongodb://127.0.0.1:27017/apitest';

const setupTests = (test) => {
    let db;
    const serverTest = createServer(expressApp);

    test.before(async () => {
        try {
            serverTest.listen(PORT_TEST, () => {
                console.log('testing on port ' + PORT_TEST);
            });

            const mongo = new MongoDataBase();
            db = await mongo.connection(URL);
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
