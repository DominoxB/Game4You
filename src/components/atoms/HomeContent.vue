<template>
  <div class="bg-gray-900 my-auto font-dosis">
    <div class="text-center mt-20 mx-80 pb-10 text-blue-100 animate-fade-down">
      <!-- <span class="text-2xl leading-10">Game4You to miejsce dla ludzi, którzy cenią sobie kultowe gry-klasyki.
        Sprawdź swoją pamięć i znajdź wszystkie pary w grze Memory! A może wolisz kółko i
        krzyżyk? Pamiętaj - tylko trzy takie same znaki w linii zaprowadzą Cię do zwycięstwa. Powodzenia!</span> -->
    </div>
    <div class="flex justify-center text-center text-blue-200 font-silk text-3xl space-x-24 mt-16">
      <router-link to="/MemoryGame">
        <div class="cursor-pointer w-[445px] h-[445px]" @mouseover="hoverMemory = true" @mouseleave="hoverMemory = false">
          <span>Memory</span>
          <video width="445" height="445" autoplay muted v-if="hoverMemory" class="mt-2">
            <source src="../videos/memory.mp4" type="video/mp4">
          </video>
          <img src="@/components/images/mems.png" alt="Memory Game"
            class="border-4 border-indigo-800 rounded mt-2" v-else />
        </div>
      </router-link>
      <router-link to="/TicTacToeGame">
        <div class="cursor-pointer w-[445px] h-[445px]" @mouseover="hoverTicTacToe = true" @mouseleave="hoverTicTacToe = false">
          <span>Kółko i krzyżyk</span>
          <video width="445" height="445" autoplay v-if="hoverTicTacToe" class="mt-2">
            <source src="../videos/tictactoe.mp4">
          </video>
          <img src="@/components/images/tictactoe.png" alt="Memory Game"
            class="border-[3px] border-indigo-800 rounded mt-2" v-else />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'HomeContent',
  setup() {
    const hoverMemory = ref(false)
    const hoverTicTacToe = ref(false)
    return {
      hoverMemory,
      hoverTicTacToe
    }
  }
})
</script>