import { IDBPDatabase, openDB } from 'idb';

class IndexedDb {
    private database: string;
    private db: any;

    constructor(database: string) {
        this.database = database;
    }

    public async createObjectStore(tableNames: string[]) {
        try {
            this.db = await openDB(this.database, 1, {
                upgrade(db: IDBPDatabase) {
                    for (const tableName of tableNames) {
                        if (db.objectStoreNames.contains(tableName)) {
                            continue;
                        }
                        db.createObjectStore(tableName, { autoIncrement: true, keyPath: 'Guid' });
                    }
                },
            });
        } catch (error) {
            return false;
        }
    }

    public async getValue(tableName: string, id: number) {
        const tx = this.db.transaction(tableName, 'readonly');
        const store = tx.objectStore(tableName);
        const result = await store.get(id);
        console.log('Get Data ', JSON.stringify(result));
        return result;
    }

    public async getAllValues(tableName: string) {
        const tx = this.db.transaction(tableName, 'readonly');
        const store = tx.objectStore(tableName);
        const result = await store.getAll();
        console.log('Get All Data', JSON.stringify(result));
        return result;
    }

    public async putValue(tableName: string, value: any) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const result = await store.put(value);
        console.log('Put Data ', JSON.stringify(result));
        return result;
    }

    public async putBulkValue(tableName: string, values: any[]) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        for (const value of values) {
            const result = await store.put(value);
            console.log('Put Bulk Data ', JSON.stringify(result));
        }
        return this.getAllValues(tableName);
    }

    public async deleteValue(tableName: string, guid: string) {
        const tx = this.db.transaction(tableName, 'readwrite');
        const store = tx.objectStore(tableName);
        const result = await store.get(guid);
        if (!result) {
            console.log('Id not found', guid);
            return result;
        }
        await store.delete(guid);
        console.log('Deleted Data', guid);
        
        // return true;
    }
}

export default IndexedDb;