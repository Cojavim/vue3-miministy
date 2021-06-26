<template>
  <div>
    <div>
      {{ report.DayString }}
    </div>
    <div>
      <p>
        Hodiny: {{ report.TimeString }}, Publikace: {{ report.Publications }}, ON: {{ report.ReturnVisits }}, 
        Videa: {{ report.VideosPlayed }}, Studia:{{ report.StudiesConducted }}
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
  props: ['report'], 
}
</script>

<style>

</style>