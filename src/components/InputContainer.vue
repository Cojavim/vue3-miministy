<template>
  <div id="InputContainer">
    <form novalidate @submit.prevent="addEntry(Entry.newEntry)">
      <!-- <label for="DayString"></label> -->
      <input id="DayString" type="date" v-model="Entry.newEntry.DayString" /> <br>

      <label for="TimeString">Čas</label>
      <input id="TimeString" type="time" v-model="Entry.newEntry.TimeString" /> <br>

      <label for="Publications">Publikace</label>
      <br>
      <circle-button type="button" @click="Entry.newEntry.Publications--">-</circle-button>
      <input class="inputClass" id="Publications" type="number" v-model="Entry.newEntry.Publications" />
      <circle-button type="button" @click="Entry.newEntry.Publications++">+</circle-button>
      <br>

      <label for="ReturnVisits">ON</label>
      <br>
      <circle-button type="button" @click="Entry.newEntry.ReturnVisits--">-</circle-button>
      <input class="inputClass" id="ReturnVisits" type="number" v-model="Entry.newEntry.ReturnVisits" />
      <circle-button type="button" @click="Entry.newEntry.ReturnVisits++">+</circle-button>
      <br>

      <label for="VideosPlayed">Videa</label>
      <br>
      <circle-button type="button" @click="Entry.newEntry.VideosPlayed--">-</circle-button>
      <input class="inputClass" id="VideosPlayed" type="number" v-model="Entry.newEntry.VideosPlayed" /> 
      <circle-button type="button" @click="Entry.newEntry.VideosPlayed++">+</circle-button>
      <br>

      <label for="StudiesConducted">Studia</label>
      <br>
      <circle-button type="button" @click="Entry.newEntry.StudiesConducted--">-</circle-button>
      <input class="inputClass" id="StudiesConducted" type="number" v-model="Entry.newEntry.StudiesConducted" /> 
      <circle-button type="button" @click="Entry.newEntry.StudiesConducted++">+</circle-button>
      <br>
      <!-- <label for="Note"></label> -->
      <textarea id="Note" type="text" v-model="Entry.newEntry.Note" placeholder="Poznámka"/> <br>

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

    const subtract = (aValue) => {
      return aValue--
    }
    
    const add = (aValue) => {
      console.log(aValue)
      return aValue++
    }

    return {
      Entry: Entry,
      cancel,
      subtract,
      add,
      addEntry: addEntry,
    }
  },
  components: {
    // InputField
  }
}
</script>

<style scoped>
.inputClass {
  outline: none;
}

</style>