<template>

  <base-card v-if="inputMode">
    <InputContainer 
      :passedEntry=entryToEdit
      @goHome="goHome"
    />
  </base-card>
  
  <base-card v-if="(!inputMode && !reportMode)">
    <MonthlyReview 
      :report=report.data
      @back="back"
      @forward="forward"
      @addNewEntry="addNewEntry"
      @editMonth="editMonth"
    />
  </base-card>

  <base-card v-if="reportMode">
    <EntryDeck 
      @edit="editEntry"
      @goHome="goHome"
    />
  </base-card>

</template>

<script>
import InputContainer from '../components/InputContainer'
import MonthlyReview from '../components/MonthlyReview.vue'
import EntryDeck from '../components/EntryDeck.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { onMounted } from '@vue/runtime-core'
import { computed, reactive, ref } from 'vue';
import { useStore } from 'vuex'
import DataEntry from '@/model/DataEntry'

export default {
  setup() {
    const store = useStore()

    let reportMode = ref(false)
    let inputMode = ref(false)

    let report = reactive({data:computed(() => store.getters.getMonthlyReport)})

    onMounted(async () => {
      await store.dispatch('loadList')
      store.commit('setCurrentEntry', new DataEntry)
      store.commit('setCurrentMonth')
    })
    
    const back = () => {
      store.commit("decreaseSelectedMonth")
      store.commit("setCurrentMonth")
      console.log("back")
    }
    const forward = () => {
      store.commit("increaseSelectedMonth")
      store.commit("setCurrentMonth")
      console.log("forward", report)
    }
    const addNewEntry = () => {
      reportMode.value = false
      inputMode.value = true
      console.log("addNewEntry")
    }
    const editMonth = () => {
      inputMode.value = false
      reportMode.value = true
      console.log("editMonth")
    }
    const goHome = () => {
      inputMode.value = false
      reportMode.value = false
      store.commit('setCurrentMonth')
    }

    let entryToEdit = new DataEntry
    const editEntry = (entry) => {
      inputMode.value = true
      reportMode.value = false
      console.log('Home Edit Entry Event caugth:', entry)
      store.commit('setCurrentEntry', entry)
    }

    return {
      entryToEdit,
      editEntry,
      report,
      back,
      forward,
      addNewEntry,
      editMonth,
      reportMode,
      inputMode,
      goHome
    }
  },
  components: { 
    InputContainer,
    MonthlyReview,
    BaseCard,
    EntryDeck,
  },

}
</script>

<style>
</style>
