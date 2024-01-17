<template>
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
      <TicTacToeInfoBoard :message="infoText"
        :class="winX.includes(true) || winO.includes(true) ? 'animate-jump' : 'animate-none'" />
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
import CardItemTicTacToe from '@/components/atoms/CardItemTicTacToe.vue'
import RefreshArrows from '@/components/atoms/RefreshArrows.vue'
import ConfettiExplosion from 'vue-confetti-explosion'
import TicTacToeInfoBoard from '@/components/atoms/TicTacToeInfoBoard.vue'

export default defineComponent({
  name: 'SinglePlayerGame',
  components: {
    CardItemTicTacToe,
    RefreshArrows,
    ConfettiExplosion,
    TicTacToeInfoBoard
  },
  setup() {
    const fieldX = ref([] as number[])
    const fieldO = ref([] as number[])
    const winX = ref([] as boolean[])
    const winO = ref([] as boolean[])
    const isBlocked = ref(false)
    const confetti = ref(false)
    const infoText = ref('X zaczyna')
    const audioX = ref<HTMLAudioElement>()
    const audioO = ref<HTMLAudioElement>()
    const audioDraw = ref<HTMLAudioElement>()
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

    const selectFieldO = () => {
      const computerChoiceId = Math.floor(Math.random() * 8) + 1
      if (fieldX.value.includes(computerChoiceId) || fieldO.value.includes(computerChoiceId)) {   // wybór losowy kratki, jesli jest zajeta-szukaj dalej
        selectFieldO()
      } else {
        fieldO.value.push(computerChoiceId)
        winO.value = lines.map(line => line.every(el => fieldO.value.includes(el)))
        if (winO.value.includes(true)) {
          infoText.value = 'O wygrywa!!!'
          isBlocked.value = true
          audioO.value?.play()
          return
        } else {
          infoText.value = 'Kolej X'
        }
      }
    }

    const selectField = (id: number) => {
      if (isBlocked.value) {
        return
      }
      fieldX.value.push(id)
      infoText.value = 'Kolej O'
      winX.value = lines.map(line => line.every(el => fieldX.value.includes(el))) // sprawdzam, czy x lub o ma 3 znaki w linii, jesli tak-przerywam gre
      const allId = fieldX.value.concat(fieldO.value)
      if (winX.value.includes(true)) {
        infoText.value = 'X wygrywa!!!'
        confetti.value = true
        isBlocked.value = true
        audioX.value?.play()
        return
      }
      if (allId.length === 9) {
        infoText.value = 'Mamy remis!'
        audioDraw.value?.play()
      }
      setTimeout(() => {
        if (allId.length < 9) {
          selectFieldO()
        }
      }, 1000)
    }

    const refreshGame = () => {
      fieldX.value = []
      fieldO.value = []
      infoText.value = 'X zaczyna'
      isBlocked.value = false
      confetti.value = false
    }

    return {
      fieldO,
      fieldX,
      winO,
      winX,
      confetti,
      infoText,
      audioX,
      audioO,
      audioDraw,
      refreshGame,
      selectField,
      selectFieldO
    }
  }
})
</script>
