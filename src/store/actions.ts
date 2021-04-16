import DataEntry from "@/model/DataEntry";

export default {
  async addEntry(context: any, aEntry: DataEntry) {
    console.log('Actions: addEntry...', aEntry);
    context.commit('addEntry', aEntry);
  },

  async loadList(context: any, payload: any) {
    console.log('Actions: loadList...');

  },

  async deleteEntry(context: any, aEntry: DataEntry) {
    console.log('Actions: deleteEntry...');

  },

  async updateEntry(context: any, aEntry: DataEntry) {
    console.log('Actions: updateEntry...');

  },
};