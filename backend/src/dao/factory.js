import { PERSISTENCES } from '#constants/persistences.js';

/**
 * Abstract Factory Pattern (persistence)
 */
class FactoryPersistence {
    /**
     *  Set Persistence
     * @param persistence DataBase|Filesystem
     * @param url Mongo uri
     * @returns persistence
     */
    static setPersistence = async (persistence, url) => {
        switch (persistence) {
            case PERSISTENCES.DB: {
                const { default: MongoDataBase } = await import(
                    '#dao/db/mongo-db.dao.js'
                );
                const dbService = new MongoDataBase(url);
                return dbService;
            }
            case PERSISTENCES.FS:
                break;
            default:
                break;
        }
    };
}

export default FactoryPersistence;
