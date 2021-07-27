<template>
  <div id="MothlyReviewContainer">
    <!-- <circle-button type="button" mode="flat" class="arrows" @click="$emit('back')">&larr;</circle-button>
    <circle-button type="button" mode="flat" class="arrows" @click="$emit('forward')">&rarr;</circle-button> -->
    <table class="reviewTable">
      <!-- <th><v-btn @click="$emit('back')">&larr;</v-btn></th> -->
      <th colspan="2">Zpráva za {{ report.Month }} {{ report.Year }}</th>
      <!-- <th><v-btn @click="$emit('forward')">&rarr;</v-btn></th> -->
      <tr>
        <td>Čas:</td>
        <td>{{ report.TimeString }}</td>
      </tr>
      <tr>
        <td>Publikace:</td>
        <td>{{ report.Publications }}</td>
      </tr>
      <tr>
        <td>Videa:</td>
        <td>{{ report.VideosPlayed }}</td>
      </tr>
      <tr>
        <td>Opětovné návštěvy:</td>
        <td>{{ report.ReturnVisits }}</td>
      </tr>
      <tr>
        <td>Studia:</td>
        <td>{{ report.StudiesConducted }}</td>
      </tr>
    </table>
    <br>
    <base-button type="button" @click="$emit('addNewEntry')">Přidat</base-button>
    <base-button type="button" mode="flat" @click="$emit('editMonth')">Upravit</base-button>
  </div>
</template>

<script>
export default {
  props: ['report'], 
}
</script>

<style scoped>
.reviewTable{
  display: inline;
  font-size: 20px;
  font-weight: 900;
  vertical-align: middle;
}
.arrows {
  width: 45%;
  margin: 0px 5px;
}
</style>