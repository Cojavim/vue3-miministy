<template>
  <div id="InputContainer">
    <form novalidate @submit.prevent="addEntry(Entry.newEntry)">
      <!-- <label for="DayString"></label> -->
      <input class="date" id="DayString" type="date" v-model="Entry.newEntry.DayString" /> <br>

      <!-- <label for="TimeString">Čas</label>
      <input id="TimeString" type="time" v-model="Entry.newEntry.TimeString" /> <br> -->

      <div class="inputSection">
        <label class="inputLabel" for="TimeString">Čas</label> <br>
        <circle-button type="button" mode="flat" @click="subtractHour">-</circle-button>
        <input class="inputClass inputTime" id="TimeString" type="time" v-model="Entry.newEntry.TimeString" />
        <circle-button type="button" @click="addHour">+</circle-button>
      </div>

      <div class="inputSection">
        <label class="inputLabel" for="Publications">Publikace</label> <br>
        <circle-button type="button" mode="flat" @click="Entry.newEntry.Publications--">-</circle-button>
        <input class="inputClass" id="Publications" type="number" v-model="Entry.newEntry.Publications" />
        <circle-button type="button" @click="Entry.newEntry.Publications++">+</circle-button>
      </div>

      <div class="inputSection">
        <label class="inputLabel" for="ReturnVisits">ON</label> <br>
        <circle-button type="button" mode="flat" @click="Entry.newEntry.ReturnVisits--">-</circle-button>
        <input class="inputClass" id="ReturnVisits" type="number" v-model="Entry.newEntry.ReturnVisits" />
        <circle-button type="button" @click="Entry.newEntry.ReturnVisits++">+</circle-button>
      </div>

      <div class="inputSection">
        <label class="inputLabel" for="VideosPlayed">Videa</label> <br>
        <circle-button type="button" mode="flat" @click="Entry.newEntry.VideosPlayed--">-</circle-button>
        <input class="inputClass" id="VideosPlayed" type="number" v-model="Entry.newEntry.VideosPlayed" /> 
        <circle-button type="button" @click="Entry.newEntry.VideosPlayed++">+</circle-button>  
      </div>

      <div class="inputSection">
        <label class="inputLabel" for="StudiesConducted">Studia</label> <br>
        <circle-button type="button" mode="flat" @click="Entry.newEntry.StudiesConducted--">-</circle-button>
        <input class="inputClass" id="StudiesConducted" type="number" v-model="Entry.newEntry.StudiesConducted" /> 
        <circle-button type="button" @click="Entry.newEntry.StudiesConducted++">+</circle-button>
      </div>
      <!-- <label for="Note"></label> -->
      <textarea class="note" id="Note" type="text" v-model="Entry.newEntry.Note" placeholder="Poznámka"/> <br>

      <base-button>Uložit</base-button>
      <base-button type="button" mode="flat" @click="cancel">Zrušit</base-button>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
// import { Dayjs } from 'dayjs'
import DataEntry from '@/model/DataEntry';
import InputField from '@/components/InputField.vue'
import { useStore } from 'vuex'

export default {
  props: {
    passedEntry: {
      type: DataEntry,
    }
  },
  setup (props, { emit }) {
    const store = useStore();
    
    let newEntry = computed(() => store.getters.getCurrentEntry);
    let Entry = reactive({newEntry});
    
    const clear = () => {
      console.log("*******")
      store.commit('setCurrentEntry', new DataEntry)
      Entry = reactive({newEntry});
    }

    const addEntry = async (Entry) => {
      let lCopy= Object.assign({}, Entry);
      store.dispatch('addEntry', lCopy);
      await store.dispatch('loadList')
      clear()
      emit('goHome')
    }

    const cancel = () => {
      clear()
      console.log("go back")
      emit('goHome')
    }

    const subtractHour = () => {
      console.log(Entry.newEntry.TimeString)
    }
    const addHour = () => {
      console.log(Entry.newEntry.TimeString)
    }
    return {
      Entry: Entry,
      cancel,
      addEntry,
      addHour,
      subtractHour
    }
  },
  components: {
    // InputField
  }
}
</script>

<style scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.inputClass {
  outline: none;
  font-size: 26px;
  width: 135px;
  border-width: 1px;
  text-align: center;
  background-color: #e8e8e8;
  border-radius: 25px;
  margin-left: 22px;
  margin-right: 22px;
}
.inputTime {
  margin-bottom: 20px!important;
}
.inputSection {
  margin-bottom: -3px;
}
.inputLabel {
  font-size: 20px;
  font-weight: 900;
}
.note {
  margin-top:10px;
  width: 259px;
  border-radius: 11px;
  height: 55px;
  text-align: center;
  font-size: 20px;
}
.date {
  border: none;
  position: relative;
  top: -14px;
  font-size: 15px;
}
</style>