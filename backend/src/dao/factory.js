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
            case PERSISTENCES.FS: {
                const { default: FileSystemDB } = await import(
                    '#dao/fs/file-system.dao.js'
                );
                const fsService = new FileSystemDB();
                return fsService;
            }
            default: {
                return console.log('no persistence');
            }
        }
    };
}

export default FactoryPersistence;
