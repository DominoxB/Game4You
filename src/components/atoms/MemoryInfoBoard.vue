<template>
  <div
    class="flex space-x-8 justify-center border border-sky-500 p-6 rounded-xl text-lime-200 text-xl uppercase font-kanit">
    <div class="border border-indigo-500 px-2 py-1.5 rounded-md bg-slate-800">Błędy: 5</div>
    <div class="border border-indigo-500 px-2 py-1.5 rounded-md bg-slate-800">Ruchy: 10</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MemoryInfo',
})
</script>