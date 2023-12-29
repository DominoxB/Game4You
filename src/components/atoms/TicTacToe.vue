<template>
  <div class="w-[450px] h-[450px] text-indigo-500 grid grid-cols-3 grid-rows-3 pt-4">
    <div class="flex justify-center items-center text-5xl font-bold">X</div>
    <div class="border border-t-transparent flex justify-center items-center text-5xl font-bold">X</div>
    <div class="border border-r-transparent border-t-transparent flex justify-center items-center text-5xl font-bold">
      X
    </div>
    <div class="border-t flex justify-center items-center text-5xl font-bold">O</div>
    <div class="border flex justify-center items-center text-5xl font-bold">O</div>
    <div class="border border-r-transparent flex justify-center items-center text-5xl font-bold">X</div>
    <div class="border-t flex justify-center items-center text-5xl font-bold">X</div>
    <div class="border border-b-transparent flex justify-center items-center text-5xl font-bold">O</div>
    <div class="border border-r-transparent border-b-transparent flex justify-center items-center text-5xl font-bold">
      O
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TicTacToe',
})
</script>

