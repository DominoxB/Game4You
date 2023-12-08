<template>
  <div class="border border-indigo-800 px-2 py-1 text-white rounded-md bg-slate-800">
    <span>{{ formatTime(timeElapsed) }}</span>
  </div>
</template>


<script lang="ts">
import { onMounted } from "vue"
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
    const formatTime = (time: number) => {
     const minutes = `0${Math.floor(time / 60)}`.slice(-2)
     const seconds = `0${time % 60}`.slice(-2)
     return `${minutes}:${seconds}`
    
    }
    onMounted(() => {
      count()
    })
    return {
      timeElapsed,
      formatTime,
    }
  }
})

</script>