<template>
  <div class="flex justify-center items-center w-1/3 border border-indigo-600 py-2 text-lime-200 rounded-md my-5 bg-gradient-to-r from-sky-500 to-indigo-500">
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