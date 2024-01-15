<template>
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8">
      <div class="text-white text-5xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500">Kółko i krzyżyk</div>
      <button class="border p-1 text-white text-3xl my-8 mr-10 hover:bg-cyan-500" @click="startGame">vs komputer</button>
      <button class="border p-1 text-white text-3xl my-8 hover:bg-cyan-500" @click="startTwoPlayers">2 graczy</button>
      <img src="@/components/images/tictactoe.png" class="mx-auto w-[480px] h-[480px]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'TicTacToeGameBoard',
  setup() {
    const router = useRouter()
    const showBtn = ref(true)
    const startGame = () => {
      router.push('/SinglePlayer')
    }

    const startTwoPlayers = () => {
      router.push('/TwoPlayers')
    }

    return {
      showBtn,
      startGame,
      startTwoPlayers,
    }
  }
})
</script>

