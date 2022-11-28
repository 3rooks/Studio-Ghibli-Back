import { PERSISTENCE } from '#constants/persistence.js';

const DB_URI = process.env.DB_LOCAL;
const persistence = PERSISTENCE[process.env.PERSISTENCE] || PERSISTENCE.FS;

/**
 * Abstract Factory Pattern (persistence)
 */
class FactoryPersistence {
    /**
     * Set Persistence
     * @returns persistence
     */
    static setPersistence = async () => {
        switch (persistence) {
            case PERSISTENCE.DB: {
                const { default: MongoDataBase } = await import(
                    '#dao/db/mongo-db.dao.js'
                );
                const dbService = new MongoDataBase(DB_URI);
                return dbService;
            }
            case PERSISTENCE.FS:
                break;
            default:
                break;
        }
    };
}

export default FactoryPersistence;
