<template>
  <div
    class="text-white border border-indigo-300 w-20 h-20 sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center"
    @click="$emit('clickCard', card)">
    <div v-if="isVisible">
      <img :src="card.image" alt="dog" class="w-10 h-10 md:w-16 md:h-16" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
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
  emits: ['clickCard'],
  setup(props) {
    const cardsStore = useMemoryStore()
    const { selectedCards, pairedCards } = storeToRefs(cardsStore)
    const card = ref(props.card)

    const isVisible = computed(() => {
      return selectedCards.value.map((el: { id: number }) => el.id).includes(card.value.id) || pairedCards.value.map((el: { id: number }) => el.id).includes(card.value.id)
    })

    return {
      isVisible,
    }
  }
})
</script>
