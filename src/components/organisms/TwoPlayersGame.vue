<template>
  <!-- DRAW -->
  <div class="mt-10">
    <div>
      <audio hidden="true" ref="audioX">
        <source src="../sounds/xwin.mp3" type="audio/mpeg">
      </audio>
      <audio hidden="true" ref="audioO">
        <source src="../sounds/owin.mp3" type="audio/mpeg">
      </audio>
      <audio hidden="true" ref="audioDraw">
        <source src="../sounds/draw.mp3" type="audio/mpeg">
      </audio>
    </div>
    <div class="flex justify-center items-center">
      <TicTacToeInfoBoard :message="infoText" />
    </div>
    <div class="flex justify-center">
      <RefreshArrows class="mt-8" @refresh="refreshGame" />
      <ConfettiExplosion :particleCount="300" v-if="confetti" :duration="2300"
        :colors="['#fff', '#FF00FF', '#50EBEC', '#7D0541']" />
    </div>
    <div class="w-[450px] h-[450px] text-indigo-500 grid grid-cols-3 grid-rows-3 mx-auto font-bold text-5xl mt-8">
      <CardItemTicTacToe v-for="n in 9" :key="n" :id="n" @show-sign="selectField" :is-x="fieldX.includes(n)"
        :is-o="fieldO.includes(n)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TicTacToeInfoBoard from '@/components/atoms/TicTacToeInfoBoard.vue'
import RefreshArrows from '@/components/atoms/RefreshArrows.vue'
import CardItemTicTacToe from '@/components/atoms/CardItemTicTacToe.vue'
import ConfettiExplosion from 'vue-confetti-explosion'
export default defineComponent({
  name: 'TwoPlayersGame',
  components: {
    RefreshArrows,
    TicTacToeInfoBoard,
    CardItemTicTacToe,
    ConfettiExplosion
  },
  setup() {
    const infoText = ref('Kółko i krzyżyk')
    const fieldX = ref([] as number[])
    const fieldO = ref([] as number[])
    const isBlocked = ref(false)
    const confetti = ref(false)
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ]
    const audioX = ref<HTMLAudioElement>()
    const audioO = ref<HTMLAudioElement>()
    const audioDraw = ref<HTMLAudioElement>()
    const selectNumber = ref(0) 


    const refreshGame = () => {
      fieldX.value = []
      fieldO.value = []
      infoText.value = 'Kółko i krzyżyk'
      isBlocked.value = false
      confetti.value = false
      selectNumber.value = 0
    }

    const selectFieldX = (id: number) => {
      if (isBlocked.value) {
        return
      }
      fieldX.value.push(id)
      const winX = lines.map(line => line.every(el => fieldX.value.includes(el))) // sprawdzam, czy x lub o ma 3 znaki w linii, jesli tak-przerywam gre
      if (winX.includes(true)) {
        infoText.value = 'X wygrywa!'
        confetti.value = true
        isBlocked.value = true
        audioX.value?.play()
        return
      }
    }

    const selectFieldO = (id: number) => {
      if (isBlocked.value) {
        return
      }
      fieldO.value.push(id)
      const winO = lines.map(line => line.every(el => fieldO.value.includes(el))) // sprawdzam, czy x lub o ma 3 znaki w linii, jesli tak-przerywam gre
      if (winO.includes(true)) {
        infoText.value = 'O wygrywa!'
        confetti.value = true
        isBlocked.value = true
        audioO.value?.play()
        return
      }
    }

    const selectField = (id: number) => {
      if (selectNumber.value % 2 === 1) { // nieparzysta
        selectFieldO(id)
      } else {
        selectFieldX(id)
      }
      selectNumber.value++
    }

    return {
      audioX, 
      audioO,
      audioDraw,
      infoText,
      confetti,
      fieldX,
      fieldO,
      refreshGame,
      selectField
    }

  }
})
</script>