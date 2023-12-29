<template>
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8">
      <div class="text-white text-5xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500">Kółko i krzyżyk</div>
      <button class="border p-1 text-white text-3xl my-8" @click="startGame">START</button>
      <img src="../images/tictac.png" class="mx-auto w-[480px] h-[480px]"/>
    </div>
    <div v-else>
      <MemoryInfoBoard />
      <Timer class="mx-auto" />
      <TicTacToe />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TicTacToe from '@/components/atoms/TicTacToe.vue'
import Timer from '@/components/atoms/Timer.vue'
import MemoryInfoBoard from '@/components/atoms/MemoryInfoBoard.vue'

export default defineComponent({
  name: 'TicTacToeGameBoard',
  components: {
    TicTacToe,
    Timer,
    MemoryInfoBoard
  },
  setup() {
    const showBtn = ref(true)
    const startGame = () => {
      showBtn.value = false
    }
    return {
      showBtn,
      startGame
    }
  }
})
</script>

