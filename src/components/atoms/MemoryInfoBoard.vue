<template>
  <div
    class="flex space-x-1 md:space-x-8 justify-center mx-28 sm:mx-0 text-center border border-sky-500 py-4 md:p-6 rounded-xl text-lime-200 text-md md:text-xl uppercase font-silk">
    <div class="border border-indigo-500 px-1 md:px-2 py-1.5 rounded-md bg-slate-800">Mistakes: {{ mistakesCounter }}</div>
    <div class="border border-indigo-500 px-1 md:px-2 py-1.5 rounded-md bg-slate-800">Moves: {{ movesCounter }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useMemoryStore } from '@/stores/memoryStore'

export default defineComponent({
  name: 'MemoryInfo',
  setup() {
    const cardsStore = useMemoryStore()
    const { movesCounter, mistakesCounter } = storeToRefs(cardsStore)
    return {
      movesCounter,
      mistakesCounter
    }
  }
})
</script>