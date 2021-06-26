import DataEntry from '@/model/DataEntry'
import Report from '@/model/Report'
import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state: {
    entryList: Array<DataEntry>(),
    currentEntry: DataEntry,
    selectedMonth: (new Date()).getMonth(),
    selectedYear: (new Date()).getFullYear(),
    monthEntryList: Array<DataEntry>()
  },
  mutations,
  actions,
  modules: {
  },
  getters: {
    getCurrentEntry(state) {
      return state.currentEntry
    },
    getEntryList(state) {
      return state.entryList
    },
    getCurrentMonth(state) {
      return state.monthEntryList
    },
    getSelectedMonth(state) {
      return state.selectedYear
    },
    getSelectedYear(state) {
      return state.selectedYear
    },
    getMonthlyReport(state) {
      const report = new Report()
      
      let hours = 0;
      let minutes = 0;

      state.monthEntryList.forEach(a => {
        hours += parseInt(a.TimeString.slice(0,2))
        minutes += parseInt(a.TimeString.slice(3,5))
        report.Publications += parseInt(a.Publications.toString())
        report.ReturnVisits += parseInt(a.StudiesConducted.toString())
        report.VideosPlayed += parseInt(a.VideosPlayed.toString())
        report.StudiesConducted += parseInt(a.StudiesConducted.toString())
      });

      if(minutes >= 60) {
        hours += Math.floor(minutes / 60)
        minutes = minutes % 60
      }

      if(minutes < 10) {
        report.TimeString = `${hours}:0${minutes}`
      } else {
        report.TimeString = `${hours}:${minutes}`
      }

      report.Month = (state.selectedMonth + 1).toString()
      report.Year = (state.selectedYear).toString()

      return report
    }
  }
})
