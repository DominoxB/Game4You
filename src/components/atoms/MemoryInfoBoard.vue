<template>
  <div
    class="w-4/5 mx-auto flex space-x-2 justify-center border border-sky-500 uppercase font-roboto rounded-xl text-lime-200 md:px-4 py-4 md:py-6 md:text-xl ">
    <div class="border border-indigo-500 w-28 py-1.5 rounded-md bg-slate-800 text-center px-1 md:w-[180px] md:px-4">{{
      $t('mistakes') }}: {{ mistakesCounter }}
    </div>
    <div class="border border-indigo-500 w-28 py-1.5 rounded-md bg-slate-800 text-center px-1 md:w-[160px] md:px-4 ">{{
      $t('moves')
    }}: {{ movesCounter }}</div>
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
