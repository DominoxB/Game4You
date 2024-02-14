<template>
  <div>
    <div>
      <audio hidden="true" ref="audioX">
        <source src="../sounds/xwin.mp3" type="audio/mpeg">
      </audio>
      <audio hidden="true" ref="audioO">
        <source src="../sounds/winner.mp3" type="audio/mpeg">
      </audio>
      <audio hidden="true" ref="audioDraw">
        <source src="../sounds/draw.mp3" type="audio/mpeg">
      </audio>
    </div>
    <div class="flex justify-center items-center mt-12 md:mt-0">
      <TicTacToeInfoBoard :message="infoText"
        :class="winO.includes(true) || winX.includes(true) ? 'animate-shake' : 'animate-none'" />
    </div>
    <div class="flex justify-center">
      <RefreshArrows class="mt-8" @refresh="refreshGame" />
      <ConfettiExplosion :particleCount="300" v-if="confetti" :stageHeight="1000" :duration="2300"
        :colors="['#fff', '#FF00FF', '#50EBEC', '#7D0541']" />
    </div>
    <div class="w-[300px] h-[300px] md:w-[450px] md:h-[450px] grid grid-cols-3 grid-rows-3 mx-auto mt-8">
      <CardItemTicTacToe v-for="n in 9" :key="n" :id="n" @show-sign="selectField" :is-x="fieldX.includes(n)"
        :is-o="fieldO.includes(n)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useI18n } from "vue-i18n"
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
    const { t } = useI18n()
    const infoText = ref(t('xStarts'))
    const fieldX = ref([] as number[])
    const fieldO = ref([] as number[])
    const winX = ref([] as boolean[])
    const winO = ref([] as boolean[])
    const isBlocked = ref(false)
    const confetti = ref(false)
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
    const selectNumber = ref(0)

    const selectFieldX = (id: number) => {
      if (isBlocked.value) {
        return
      }
      fieldX.value.push(id)
      winX.value = lines.map(line => line.every(el => fieldX.value.includes(el))) // sprawdzam, czy x ma 3 znaki w linii, jesli tak-przerywam gre
      if (winX.value.includes(true)) {
        infoText.value = t('xWins')
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
      winO.value = lines.map(line => line.every(el => fieldO.value.includes(el))) // sprawdzam, czy o ma 3 znaki w linii, jesli tak-przerywam gre
      if (winO.value.includes(true)) {
        infoText.value = t('oWins')
        confetti.value = true
        isBlocked.value = true
        audioO.value?.play()
        return
      }
    }

    const selectField = (id: number) => {
      if (selectNumber.value % 2 === 1) {
        infoText.value = t('xTurn')
        selectFieldO(id)
      } else {
        infoText.value = t('oTurn')
        selectFieldX(id)
      }
      const allId = fieldX.value.concat(fieldO.value)
      if (allId.length === 9 && !winX.value.includes(true) && !winO.value.includes(true)) {
        infoText.value = t('draw')
        audioDraw.value?.play()
      }
      selectNumber.value++
    }

    const refreshGame = () => {
      fieldX.value = []
      fieldO.value = []
      infoText.value = t('xStarts')
      isBlocked.value = false
      confetti.value = false
      selectNumber.value = 0
    }

    return {
      audioX,
      audioO,
      audioDraw,
      infoText,
      confetti,
      fieldX,
      fieldO,
      winX,
      winO,
      refreshGame,
      selectField
    }
  }
})
</script>
