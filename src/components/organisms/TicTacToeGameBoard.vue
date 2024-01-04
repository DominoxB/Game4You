<template>
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8">
      <div class="text-white text-5xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500">Kółko i krzyżyk</div>
      <button class="border p-1 text-white text-3xl my-8" @click="startGame">START</button>
      <img src="../images/tictac.png" class="mx-auto w-[480px] h-[480px]" />
    </div>
    <div v-else>
      <TicTacToeInfoBoard />
      <Timer class="mx-auto mb-8" />
      <div class="w-[450px] h-[450px] text-indigo-500 grid grid-cols-3 grid-rows-3 font-bold text-5xl">
        <CardItemTicTacToe v-for="n in 9" :key="n" @click-card="selectCard"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Timer from '@/components/atoms/Timer.vue'
import TicTacToeInfoBoard from '@/components/atoms/TicTacToeInfoBoard.vue'
import CardItemTicTacToe from '@/components/atoms/CardItemTicTacToe.vue'

export default defineComponent({
  name: 'TicTacToeGameBoard',
  components: {
    Timer,
    TicTacToeInfoBoard,
    CardItemTicTacToe
  },
  setup() {
    const showBtn = ref(true)
    const startGame = () => {
      showBtn.value = false
    }

    const selectCard = () => {
    }
    return {
      showBtn,
      startGame,
      selectCard
    }
  }
})
</script>

