<template>

  <base-card>
    <InputContainer />
  </base-card>
  
  <base-card>
    <MonthlyReview />
  </base-card>

  <base-card>
    <EntryDeck />
  </base-card>

</template>

<script>
import InputContainer from '../components/InputContainer'
import MonthlyReview from '../components/MonthlyReview.vue'
import EntryDeck from '../components/EntryDeck.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
export default {
  components: { 
    InputContainer,
    MonthlyReview,
    BaseCard,
    EntryDeck
  },

}
</script>

<style>
</style>
