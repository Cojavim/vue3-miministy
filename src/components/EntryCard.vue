<template>
  <div class="card">
    <div class="dateAndTime">
      {{ entry.FormatedDate }}&nbsp;&nbsp;&nbsp;{{ entry.TimeString }}
    </div>
    <div>
      <p class="note">
        {{ entry.Note }}
      </p>
      <p class="data">
        Publikace: {{ entry.Publications }}, Videa: {{ entry.VideosPlayed }}
        <br>
        ON: {{ entry.ReturnVisits }}, Studia:{{ entry.StudiesConducted }}
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

<style scoped>
.dateAndTime {
  margin-top: -15px;
}
.note {

}
.data {

}
.card {
  font-weight: 900;
  font-size: 20px;
}
</style>