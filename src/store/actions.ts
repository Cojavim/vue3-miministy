import IndexedDb from "@/api/IndexedDb";
import DataEntry from "@/model/DataEntry";


export default {
  async addEntry(context: any, aEntry: DataEntry) {
    console.log('Actions: addEntry...', aEntry);
    
    const db = new IndexedDb('Miniministry');
    await db.createObjectStore(['Entries']);
    await db.putValue('Entries', aEntry);

    context.commit('addEntry', aEntry);

  },

  async loadList(context: any, payload: any) {
    console.log('Actions: loadList...');
    const db = new IndexedDb('Miniministry');
    await db.createObjectStore(['Entries']);

    const data = await db.getAllValues('Entries')

    context.commit('loadEntries', data)
  },

  

  async deleteEntry(context: any, aEntry: DataEntry) {
    console.log('Actions: deleteEntry...');
    const db = new IndexedDb('Miniministry');
    await db.createObjectStore(['Entries']);
    await db.deleteValue('Entries', aEntry.Guid)
  },

  async editEntry(context: any, aEntry: DataEntry) {
    console.log('Actions: updateEntry...');

  },
};