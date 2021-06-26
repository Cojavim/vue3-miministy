import DataEntry from "@/model/DataEntry";

export default {
  loadEntries(state: any, aEntries: DataEntry[]) {
    console.log('Mutatios: loadEntries..')
    console.table(aEntries)
    state.entryList = aEntries
  },

  addEntry(state: any, aEntry: DataEntry) {
    console.log('Mutatios: addEntry..', aEntry)
    state.entryList.push(aEntry);
  },

  setCurrentEntry(state: any, aEntry: DataEntry) {
    state.currentEntry = aEntry
  },

  setCurrentMonth(state: any) {
    const allEntries = state.entryList
    const currtentMonthEntries = allEntries.filter(function (entry: DataEntry) {
      const entryYear = parseInt(entry.DayString.slice(0,4))
      
      const entryMonth = parseInt(entry.DayString.slice(5,7))
      return entryMonth === ( state.selectedMonth + 1 ) && entryYear === state.selectedYear 
    })
    state.monthEntryList = currtentMonthEntries 
  },
  
  decreaseSelectedMonth(state: any) {
    if (state.selectedMonth === 0) {
      state.selectedMonth = 11
      state.selectedYear --
    } else {
      state.selectedMonth --
    }
  },

  increaseSelectedMonth(state: any) {
    if (state.selectedMonth === 11) {
      state.selectedMonth = 0
      state.selectedYear ++
    } else {
      state.selectedMonth ++
    }
  },

  deleteEntry(state: any, aEntry: DataEntry) {
    console.log('Mutatios: deleteEntry..', aEntry)
    
    const toDelete = new Set([aEntry])
    
    filterInPlace(state.entryList, (obj: any) => !toDelete.has(obj.id));

    console.log(state.entryList)
  },

  updateEntry(state: any, aEntry: DataEntry) {
    console.log('Mutatios: updateEntry..', aEntry)
    for (const i in state.entryList) {
      if (state.entryList[i].Guid == aEntry.Guid) {
        state.entryList[i] = aEntry;
        break;
      }
    }
  }
};

const filterInPlace = (arr: any[], predicate: any) => {
  let end = 0;

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];

    if (predicate(obj)) {
      arr[end ++] = obj;
    }
  }

  arr.length = end;
};


