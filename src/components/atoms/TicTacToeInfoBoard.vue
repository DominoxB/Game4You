<template>
  <div
    class="flex space-x-8 justify-center border border-sky-500 p-6 rounded-xl text-lime-200 text-xl uppercase font-silk">
    <div class="px-2 py-1.5 rounded-md">{{ message }}</div>
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