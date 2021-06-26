<template>
  <div id="InputContainer">
    <form novalidate @submit.prevent="addEntry(Entry.newEntry)">
      <!-- <label for="DayString"></label> -->
      <input id="DayString" type="date" v-model="Entry.newEntry.DayString" /> <br>

      <label for="TimeString">Čas</label>
      <input id="TimeString" type="time" v-model="Entry.newEntry.TimeString" /> <br>

      <label for="Publications">Publikace</label>
      <input id="Publications" type="number" v-model="Entry.newEntry.Publications" /> <br>

      <label for="ReturnVisits">ON</label>
      <input id="ReturnVisits" type="number" v-model="Entry.newEntry.ReturnVisits" /> <br>

      <label for="VideosPlayed">Videa</label>
      <input id="VideosPlayed" type="number" v-model="Entry.newEntry.VideosPlayed" /> <br>

      <label for="StudiesConducted">Studia</label>
      <input id="StudiesConducted" type="number" v-model="Entry.newEntry.StudiesConducted" /> <br>

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

    return {
      Entry: Entry,
      cancel,
      addEntry: addEntry,
    }
  }
}
</script>

<style>

</style>