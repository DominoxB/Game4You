<template>
  <div
    class="text-center border border-sky-500 py-4 px-1 md:p-6 rounded-xl text-blue-100 text-xl md:text-2xl lg:text-3xl uppercase font-silk lg::w-1/4">
    <div class="text-blue-50">Kółko i krzyżyk</div>
    <div class="px-10 py-1.5 rounded-md text-lime-300">{{ message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TicTacToeInfo',
  props: {
    message: {
      type: String,
    }
  }
})
</script>