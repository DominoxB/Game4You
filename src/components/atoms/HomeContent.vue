<template>
  <div class="bg-gray-900 my-auto">
    <div class="text-center mt-20 mx-80 pb-10 text-white">
      <span class="text-2xl font-bebas leading-10">Game4You to miejsce dla ludzi, którzy cenią sobie kultowe gry-klasyki.
        Sprawdź swoją pamięć, spróbuj szczęścia i znajdź wszystkie pary w grze pamięciowej Memory Doggy! A może wolisz zagrać w kółko i
        krzyżyk? Pamiętaj - tylko trzy takie same znaki w linii zaprowadzą Cię do zwycięstwa. Powodzenia!</span>
    </div>
    <div class="flex justify-center space-x-24 mt-20">
      <router-link to="/MemoryGame">
        <div class="text-center font-bebas text-4xl transition lease-in-out delay-100 hover:scale-110 cursor-pointer z-0">
          <span class="text-white">Memory</span>
          <img src="@/components/images/memory-game.png" alt="Memory Game"
            class="w-[600px] h-[300px] border-4 border-white rounded" />
        </div>
      </router-link>
      <router-link to="/TicTacToeGame">
        <div class="text-center font-bebas text-4xl transition lease-in-out delay-100 hover:scale-110 cursor-pointer z-0">
          <span class="text-white">Tic Tac Toe</span>
          <img src="@/components/images/tictactoe.png" alt="Kółko i krzyżyk"
            class="w-[600px] h-[300px] border-4 border-white rounded" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomeContent'
})
</script>