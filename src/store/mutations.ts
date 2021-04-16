import DataEntry from "@/model/DataEntry";

export default {
  addEntry(state: any, aEntry: DataEntry) {
    console.log('Mutatios: addEntry..', aEntry)
    state.entryList.push(aEntry);
  }
};