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
    </form>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
// import { Dayjs } from 'dayjs'
import DataEntry from '@/model/DataEntry';
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore();

    let newEntry = new DataEntry();
    let Entry = reactive({newEntry});
    
    const addEntry = (Entry: DataEntry) => {
      let lCopy= Object.assign({}, Entry);
      store.dispatch('addEntry', lCopy);
    }

    return {
      Entry: Entry,
      addEntry: addEntry,
    }
  }
}
</script>

<style>

</style>