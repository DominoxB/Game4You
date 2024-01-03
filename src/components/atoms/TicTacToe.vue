<template>
  <div class="w-[450px] h-[450px] text-indigo-500 grid grid-cols-3 grid-rows-3 pt-4 font-bold text-5xl">
    <div class="flex justify-center items-center">X</div>
    <div class="border border-y-transparent border-r-transparent flex justify-center items-center">X</div>
    <div class="border border-r-transparent border-y-transparent flex justify-center items-center">
      X
    </div>
    <div class="border-t flex justify-center items-center">O</div>
    <div class="border flex justify-center items-center">O</div>
    <div class="border border-x-transparent flex justify-center items-center">X</div>
    <div class="border-t flex justify-center items-center">X</div>
    <div class="border border-y-transparent border-r-transparent flex justify-center items-center">O</div>
    <div class="border border-r-transparent border-y-transparent flex justify-center items-center">
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

