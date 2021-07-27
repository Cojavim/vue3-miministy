<template>
  <div v-for="(entry,idx) in entryList" :key="idx">
    <base-card>
      <EntryCard :entry="entry" @edit="editEntry" @delete="deleteEntry"/>
    </base-card>
  </div>
  <!-- <base-button class="btnBack" type="button" @click="$emit('goHome')">Zpět</base-button> -->
</template>

<script>
  import EntryCard from './EntryCard.vue'
  import { computed } from 'vue'
  import { useStore } from 'vuex'
export default {
  setup (props, { emit }) {
    const store = useStore()

    const entryList = computed(() => store.getters.getCurrentMonth)

    const deleteEntry = async (entry) => {
      await store.dispatch('deleteEntry', entry)
      await store.dispatch('loadList')
      store.commit('setCurrentMonth')
    }

    const editEntry = (entry) => emit('edit',entry)

    return {
      entryList,
      deleteEntry,
      editEntry,
    }
  },
  components: { 
    EntryCard,
  },
}
</script>

<style scoped>
.btnBack {
  position: fixed;
  bottom: 5px;
  right: -5px;
}
</style>