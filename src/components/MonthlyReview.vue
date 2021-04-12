<template>
  <div id="MothlyReviewContainer">
    <table>
      <th><v-btn @click="back">&larr;</v-btn></th>
      <th colspan="2">Zpráva za {{ shownMonth + 1 }} {{ shownYear }}</th>
      <th><v-btn @click="forward">&rarr;</v-btn></th>
      <tr>
        <td rowspan="5"></td>
        <td>Čas:</td>
        <td>{{ totalHous }}:{{ totalMinutes }}</td>
        <td rowspan="5"></td>
      </tr>
      <tr>
        <td>Publikace:</td>
        <td>{{ totalPub }}</td>
      </tr>
      <tr>
        <td>Opětovné návštěvy:</td>
        <td>{{ totalVisits }}</td>
      </tr>
      <tr>
        <td>Videa:</td>
        <td>{{ totalVideos }}</td>
      </tr>
      <tr>
        <td>Studia:</td>
        <td>{{ totalStudies }}</td>
      </tr>
    </table>
    <base-button type="button" @click="edit">Upravit</base-button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const shownMonth = ref(0);
    const shownYear = ref(0);

    const totalHous = ref(0);
    const totalMinutes = ref(0);

    const totalPub = ref(0);
    const totalVisits = ref(0);
    const totalVideos = ref(0);
    const totalStudies = ref(0);


    return {
      shownMonth: shownMonth,
      shownYear: shownYear,

      totalHous: totalHous,
      totalMinutes: totalMinutes,

      totalPub: totalPub,
      totalVisits: totalVisits,
      totalVideos: totalVideos,
      totalStudies: totalStudies,
    }
  }
}
</script>

<style>

</style>