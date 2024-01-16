<template>
  <div
    class="flex justify-center border border-sky-500 p-6 rounded-xl text-blue-100 text-3xl uppercase font-silk w-1/4">
    <div class="px-10 py-1.5 rounded-md">{{ message }}</div>
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