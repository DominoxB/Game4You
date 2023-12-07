<template>
  <div
    class="flex space-x-8 justify-center mb-10 border-4 p-6 rounded-xl border-t-cyan-500 border-b-pink-400 border-x-lime-500 text-lime-200 text-xl">
    <div class="border border-indigo-800 px-2 py-1 rounded-md bg-slate-800">Błędy: 5</div>
    <div class="border border-indigo-800 px-2 py-1 rounded-md bg-slate-800">Ruchy: 10</div>
    <div class="border border-indigo-800 px-2 py-1 rounded-md bg-slate-800">Czas</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MemoryInfo'
})
</script>