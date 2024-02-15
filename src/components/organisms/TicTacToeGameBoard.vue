<template>
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8 text-white">
      <div class="text-3xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500 md:text-5xl">{{ $t('tictac') }}</div>
      <div class="text-xl md:text-3xl">
        <button class="border p-1 my-8 mr-1 hover:bg-cyan-500 sm:mr-2 md:mr-10" @click="startGame">{{ $t('single')
        }}</button>
        <button class="border p-1 mb-8 hover:bg-cyan-500 md:my-8" @click="startTwoPlayers">{{ $t('multi') }}</button>
      </div>
      <img src="@/components/images/tictactoe.png" class="mx-auto px-10" />
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
