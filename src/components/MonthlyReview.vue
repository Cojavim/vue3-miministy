<template>
  <div id="MothlyReviewContainer">
    <table>
      <th><v-btn @click="$emit('back')">&larr;</v-btn></th>
      <th colspan="2">Zpráva za {{ report.Month }} {{ report.Year }}</th>
      <th><v-btn @click="$emit('forward')">&rarr;</v-btn></th>
      <tr>
        <td>Čas:</td>
        <td>{{ report.TimeString }}</td>
      </tr>
      <tr>
        <td>Publikace:</td>
        <td>{{ report.Publications }}</td>
      </tr>
      <tr>
        <td>Opětovné návštěvy:</td>
        <td>{{ report.ReturnVisits }}</td>
      </tr>
      <tr>
        <td>Videa:</td>
        <td>{{ report.VideosPlayed }}</td>
      </tr>
      <tr>
        <td>Studia:</td>
        <td>{{ report.StudiesConducted }}</td>
      </tr>
    </table>
    <base-button type="button" @click="$emit('addNewEntry')">Přidat</base-button>
    <base-button type="button" mode="flat" @click="$emit('editMonth')">Upravit</base-button>
  </div>
</template>

<script>
export default {
  props: ['report'], 
}
</script>

<style>

</style>