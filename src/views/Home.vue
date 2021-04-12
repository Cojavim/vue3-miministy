<template>

  <base-card>
    <InputContainer />
  </base-card>
  
  <MonthlyReview />
  
  <base-card>
    <EntryCard />
  </base-card>

</template>

<script>
import InputContainer from '../components/InputContainer'
import MonthlyReview from '../components/MonthlyReview.vue'
import EntryCard from '../components/EntryCard.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
export default {
  components: { 
    InputContainer,
    MonthlyReview,
    EntryCard,
    BaseCard
  },

}
</script>

<style>
</style>
