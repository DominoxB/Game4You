<template>
  <div class="bg-gray-900 my-auto font-chacra">
    <div class="text-center mt-20 mx-80 pb-10 text-indigo-300">
      <span class="text-2xl leading-10">Game4You to miejsce dla ludzi, którzy cenią sobie kultowe gry-klasyki.
        Sprawdź swoją pamięć, spróbuj szczęścia i znajdź wszystkie pary w grze pamięciowej Memory Doggy! A może wolisz zagrać w kółko i
        krzyżyk? Pamiętaj - tylko trzy takie same znaki w linii zaprowadzą Cię do zwycięstwa. Powodzenia!</span>
    </div>
    <div class="flex justify-center text-center space-x-24 mt-16">
      <router-link to="/MemoryGame">
        <div class="cursor-pointer w-[445px] h-[445px]" @mouseover="hover = true" @mouseleave="hover = false">
          <span class="font-silk text-pink-400 text-3xl">Memory</span>
          <video width="445" height="445" autoplay v-if="hover" class="mt2">
            <source src="../videos/memory.mp4">
          </video>
          <img src="@/components/images/mems.png" alt="Memory Game"
            class="border-4 border-pink-800 rounded mt-2" v-else/>
        </div>
      </router-link>
      <router-link to="/TicTacToeGame">
        <div class="cursor-pointer">
          <span class="font-silk text-pink-400 text-3xl">Kółko i krzyżyk</span>
          <img src="@/components/images/tictactoe.png" alt="Kółko i krzyżyk"
            class="w-[600px] h-[300px] border-4 border-white rounded mt-2"/>
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
    const hover = ref(false)
    return {
      hover
    }
  }
})
</script>