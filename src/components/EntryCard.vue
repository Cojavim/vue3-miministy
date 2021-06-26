<template>
  <div>
    <div>
      {{ entry.DayString }}
    </div>
    <div>
      <p>
        {{ entry.Note }}
      </p>
      <p>
        Hodiny: {{ entry.TimeString }}, Publikace: {{ entry.Publications }}, ON: {{ entry.ReturnVisits }}, 
        Videa: {{ entry.VideosPlayed }}, Studia:{{ entry.StudiesConducted }}
      </p>
    </div>
    <div>
      <base-button type="button" @click="$emit('edit',entry)">Upravit</base-button>
      <base-button type="button" mode="flat" @click="$emit('delete',entry)">Smazat</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['entry'], 
}
</script>

<style>

</style>