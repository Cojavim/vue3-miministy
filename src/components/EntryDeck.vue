<template>
  <div v-for="(entry,idx) in entryList" :key="idx">
    <base-card>
      <EntryCard :entry="entry" @edit="editEntry" @delete="deleteEntry"/>
    </base-card>
  </div>
</template>

<script>
  import EntryCard from './EntryCard.vue'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()

    const entryList = computed(() => store.state.entryList)
    

    return {
      entryList,
    }
  },
  components: { 
    EntryCard
  },
}
</script>

<style>

</style>