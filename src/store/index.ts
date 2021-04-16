import DataEntry from '@/model/DataEntry'
import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'

export default createStore({
  state: {
    entryList: Array<DataEntry>()
  },
  mutations,
  actions,
  modules: {
  },
  getters: {
    
  }
})
