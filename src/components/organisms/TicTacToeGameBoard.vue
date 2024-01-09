<template>
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
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8">
      <div class="text-white text-5xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500">Kółko i krzyżyk</div>
      <button class="border p-1 text-white text-3xl my-8" @click="startGame">START</button>
      <img src="../images/tictac.png" class="mx-auto w-[480px] h-[480px]" />
    </div>
    <div v-else>
      <TicTacToeInfoBoard :message="infoText" />
      <RefreshArrows class="mt-8" />
      <div class="w-[450px] h-[450px] text-indigo-500 grid grid-cols-3 grid-rows-3 font-bold text-5xl mt-8">
        <CardItemTicTacToe v-for="n in 9" :key="n" :id="n" @click-card="selectField" :is-x="fieldX.includes(n)"
          :is-o="fieldO.includes(n)" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TicTacToeInfoBoard from '@/components/atoms/TicTacToeInfoBoard.vue'
import CardItemTicTacToe from '@/components/atoms/CardItemTicTacToe.vue'
import RefreshArrows from '../atoms/RefreshArrows.vue'

export default defineComponent({
  name: 'TicTacToeGameBoard',
  components: {
    TicTacToeInfoBoard,
    CardItemTicTacToe,
    RefreshArrows
  },
  setup() {
    const showBtn = ref(true)
    const startGame = () => {
      showBtn.value = false
    }

    const fieldX = ref([] as number[])
    const fieldO = ref([] as number[])
    const infoText = ref('Kółko i krzyżyk')
    const audioX = ref<HTMLAudioElement>()
    const audioO = ref<HTMLAudioElement>()
    const audioDraw = ref<HTMLAudioElement>()


    const selectFieldO = () => {
      const computerChoiceId = Math.floor(Math.random() * 8) + 1
      if (fieldX.value.includes(computerChoiceId) || fieldO.value.includes(computerChoiceId)) {   // wybór losowy kratki, jesli jest zajeta-szukaj dalej
        selectFieldO()
      } else {
        fieldO.value.push(computerChoiceId)
        const winO = lines.map(line => line.every(el => fieldO.value.includes(el)))
        console.log('lineO:', winO)
        if (winO.includes(true)) {
          infoText.value = 'O wygrywa!'
          audioO.value?.play()
          return
        }
      }
    }

    const selectField = (id: number) => {
      fieldX.value.push(id)
      const winX = lines.map(line => line.every(el => fieldX.value.includes(el))) // sprawdzam, czy x lub o ma 3 znaki w linii, jesli tak-przerywam gre
      console.log('line:', winX)
      const allId = fieldX.value.concat(fieldO.value)
      console.log(allId)
      if (winX.includes(true)) {
        infoText.value = 'X wygrywa!'
        audioX.value?.play()
        return
      }
      if (allId.length === 9) {
        infoText.value = 'Mamy remis!'
        audioDraw.value?.play()
      }
      setTimeout(() => {
        selectFieldO()
      }, 1000)
    }

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

    return {
      showBtn,
      startGame,
      selectField,
      fieldX,
      fieldO,
      infoText,
      audioX,
      audioO,
      audioDraw
    }
  }
})
</script>

