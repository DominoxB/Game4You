<template>
  <div class="text-white border border-indigo-300 w-[120px] h-[120px] flex items-center justify-center"
    @click="clickCard">
    <div v-if="isVisible">
      <img :src="card.image" alt="dog" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMemoryStore } from '@/stores/memoryStore'

export default defineComponent({
  name: 'CardItem',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const isVisible = ref(false)
    const cardsStore = useMemoryStore()
    const { selectedCards } = storeToRefs(cardsStore)


    const clickCard = () => {
      selectedCards.value.push(props.card.id)
      isVisible.value = true     
      console.log(selectedCards.value)
    }
    return {
      isVisible,
      clickCard
    }
  }
})
</script>
