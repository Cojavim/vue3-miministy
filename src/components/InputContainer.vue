<template>
  <div id="InputContainer">
    <form novalidate @submit.prevent="onSubmit">
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
import { ref, reactive } from 'vue';
import { Dayjs } from 'dayjs'
import DataEntry from '@/model/DataEntry';
export default {
  setup() {
    let newEntry = new DataEntry();
    const Entry = reactive({newEntry});
    console.log(newEntry)
    
    function onSubmit() {
      console.log('Submit', Entry)
    }

    return {
      Entry: Entry,
      onSubmit: onSubmit
    }
  }
}
</script>

<style>

</style>