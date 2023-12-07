<template>
  <div class="border border-indigo-800 px-2 py-1 rounded-md bg-slate-800">
    <span>{{ formatTime(timeElapsed) }}</span>
    <button class="ml-3" @click="start">START</button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  name: 'MemoryTimer',
  setup() {
    const timeElapsed = ref(0)
    const count = () => {
      setInterval(() => {
        timeElapsed.value++
      }, 1000)
    }
    const formatTime = (timeElapsed: number) => {
     const minutes = `0${Math.floor(timeElapsed / 60)}`.slice(-2)
     const seconds = `0${timeElapsed % 60}`.slice(-2)
     return `${minutes}:${seconds}`
    
    }
    const start = () => {
      count()
    }
    return {
      timeElapsed,
      formatTime,
      start
    }
  }
})

</script>