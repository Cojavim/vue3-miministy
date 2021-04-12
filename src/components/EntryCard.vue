<template>
  <div>
    <div>
      entry.date
      <!-- {{ entry.date }} -->
    </div>
    <div>
      <p>
        <!-- {{ entry.note }} -->
      </p>
      <p>
        <!-- Hodiny: {{ entry.timeServed }}, Publikace: {{ entry.publications }}, ON: {{ entry.returnVisits }},  -->
        <!-- Videa: {{ entry.videosPlayed }}, Studia:{{ entry.studiesConducted }} -->
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
  // props: ['entry'], 
}
</script>

<style>

</style>