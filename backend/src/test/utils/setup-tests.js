import httpServer from '#config/http.js';
import MONGO_SERVICE from '#dao/mongo-db.dao.js';

const PORT_TEST = 8081;

const setupTests = (test) => {
    let db;
    test.before(async () => {
        try {
            httpServer.listen(PORT_TEST, () => {
                console.log('listening for tests ' + PORT_TEST);
            });
            db = await MONGO_SERVICE.connection(
                'mongodb://127.0.0.1:27017/apitest'
            );
            console.log('DB', db.connection.name);
        } catch (error) {
            console.log(error);
        }
    });

    test.after.always(async () => {
        if (db) {
            await db.disconnect();
        }
    });
};

export default setupTests;
