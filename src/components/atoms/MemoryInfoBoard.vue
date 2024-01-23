<template>
  <div
    class="flex space-x-2 md:space-x-8 justify-center text-center border border-sky-500 py-4 md:p-6 rounded-xl text-lime-200 px-2 md:text-xl uppercase font-silk">
    <div class="border border-indigo-500 px-1 md:px-2 py-1.5 rounded-md bg-slate-800 w-[135px] md:w-[185px]">Mistakes: {{ mistakesCounter }}</div>
    <div class="border border-indigo-500 px-1 md:px-2 py-1.5 rounded-md bg-slate-800 w-[109px] md:w-[180px]">Moves: {{ movesCounter }}</div>
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