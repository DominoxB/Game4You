<template>
  <div
    class="w-4/5 mx-auto flex space-x-2 justify-center border border-sky-500 md:px-4 py-4 md:py-6 rounded-xl text-lime-200 md:text-xl uppercase font-roboto">
    <div class="border border-indigo-500 w-28 md:w-[180px] text-center px-1 md:px-4 py-1.5 rounded-md bg-slate-800">{{
      $t('mistakes') }}: {{ mistakesCounter }}
    </div>
    <div class="border border-indigo-500 w-28 md:w-[160px] text-center px-1 md:px-4 py-1.5 rounded-md bg-slate-800">{{ $t('moves')
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
