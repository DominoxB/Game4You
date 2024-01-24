<template>
  <div
    class="flex justify-center items-center w-1/3 font-silk border border-indigo-600 py-2 text-lime-200 rounded-md my-5 bg-gradient-to-r from-sky-500 to-indigo-500">
    <span>{{ formatTime(timeElapsed) }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { storeToRefs } from 'pinia'
import { useMemoryStore } from '@/stores/memoryStore'

export default defineComponent({
  name: 'MemoryTimer',
  setup() {
    const cardsStore = useMemoryStore()
    const { showModal, movesCounter } = storeToRefs(cardsStore)
    const timeElapsed = ref(0)

    const formatTime = (time: number) => {
      const minutes = `0${Math.floor(time / 60)}`.slice(-2)
      const seconds = `0${time % 60}`.slice(-2)
      return `${minutes}:${seconds}`
    }

    const start = setInterval(() => {
      timeElapsed.value++
    }, 1000)

    watch(showModal, () => {
      if (showModal.value === true) {
        clearInterval(start)
      }
    })

    watch(movesCounter, () => {
      if (movesCounter.value === 0) {
        timeElapsed.value = 0
      }
    })

    return {
      timeElapsed,
      formatTime,
    }
  }
})
</script>
