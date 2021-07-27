<template>

  <base-card v-if="inputMode">
    <InputContainer 
      :passedEntry=entryToEdit
      @goHome="goHome"
    />
  </base-card>
  <div class="MonthlyReview" v-if="homeMode">
    <base-card>
      <MonthlyReview 
        :report=report.data
        @back="back"
        @forward="forward"
        @addNewEntry="addNewEntry"
        @editMonth="editMonth"
      />
    </base-card>
    <div class="arrowsBottom">
      <circle-button type="button" mode="flat" class="arrows" @click="back">&larr;</circle-button>
      <circle-button type="button" mode="flat" class="arrows" @click="forward">&rarr;</circle-button>
    </div>
  </div>
  

  <!-- <base-card v-if="reportMode"> -->
    <EntryDeck 
      v-if="reportMode"
      @edit="editEntry"
      @goHome="goHome"
    />
  <!-- </base-card> -->

  <div class="Settings" v-if="settingsMode">
    <base-card style="background-color: yellow;">
      <h1> UNDER CONSTRUCTION </h1>
    </base-card>
  </div>

  <div class="footer">
    <circle-button type="button" v-bind:class="{'navbtnActive': homeMode, 'navbtn':!homeMode}" @click="goHome">
      <font-awesome-icon :icon="['fas', 'home']" />
    </circle-button>
    <circle-button type="button" v-bind:class="{'navbtnActive': inputMode, 'navbtn':!inputMode}" @click="addNewEntry">
      <font-awesome-icon :icon="['fas', 'plus']" />
    </circle-button>
    <circle-button type="button" v-bind:class="{'navbtnActive': reportMode, 'navbtn':!reportMode}" @click="editMonth">
      <font-awesome-icon :icon="['fas', 'list']" />
    </circle-button>
    <circle-button type="button" v-bind:class="{'navbtnActive': settingsMode, 'navbtn':!settingsMode}" @click="goToSettings">
      <font-awesome-icon :icon="['fas', 'cog']" />
    </circle-button>
  </div>
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
    let settingsMode = ref(false)
    let homeMode = ref(true)

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
      homeMode.value = false
      reportMode.value = false
      inputMode.value = true
      settingsMode.value = false
      console.log("addNewEntry")
    }
    const editMonth = () => {
      homeMode.value = false
      inputMode.value = false
      reportMode.value = true
      settingsMode.value = false
      console.log("editMonth")
    }
    const goHome = () => {
      homeMode.value = true
      inputMode.value = false
      reportMode.value = false
      settingsMode.value = false
      store.commit('setCurrentMonth')
    }
    const goToSettings = () => {
      homeMode.value = false
      inputMode.value = false
      reportMode.value = false
      settingsMode.value = true
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
      settingsMode,
      homeMode,
      goHome,
      goToSettings
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

<style scoped>

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}

.arrows {
  width: 45%;
  margin: 0px 5px;
}

.arrowsBottom {
  position: fixed;
  left: 0;
  bottom: 55px;
  width: 100%;
}

.navbtn {
  width: 23%;
  height: 33px;
  margin: 2px 2px;
  border-radius: 7px!important;
  color: #3a0061;
  background-color: white;
}

.navbtnActive {
  width: 23%;
  height: 33px;
  margin: 2px 2px;
  border-radius: 7px!important;
}

</style>
