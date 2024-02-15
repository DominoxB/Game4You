<template>
  <div
    class="font-silk text-center border border-sky-500 space-y-2 py-4 px-1 rounded-xl text-blue-100 uppercase w-2/3 md:p-6 md:w-2/4 xl:w-1/4">
    <div class="text-blue-50 text-xl md:text-2xl lg:text-3xl">{{ $t('tictac') }}</div>
    <div class="rounded-md text-lime-300 md:text-xl lg:text-2xl">{{ message }}</div>
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
