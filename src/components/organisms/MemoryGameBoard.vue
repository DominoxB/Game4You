<template>
  <div>
    <MemoryInfoBoard />
    <Timer v-if="!showBtn"/>
    <div class="grid grid-cols-4 grid-rows-4 w-[480px] h-[480px]">
      <div v-for="card in shuffledCards" :key="card.id">
        <CardItem :image="card.image" />
      </div>
      <button v-if="showBtn" class="text-white" @click="startGame">START</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CardItem from '../atoms/CardItem.vue'
import MemoryInfoBoard from '../atoms/MemoryInfoBoard.vue'
import Timer from '../atoms/Timer.vue'

export default defineComponent({
  name: 'MemoryGameBoard',
  components: {
    CardItem,
    MemoryInfoBoard,
    Timer
  },
  setup() {
    const cards = [
      {
        id: 1,
        image: '🍓'
      },
      {
        id: 2,
        image: '🍋'
      },
      {
        id: 3,
        image: '🍑'
      },
      {
        id: 4,
        image: '🍒'
      },
      {
        id: 5,
        image: '🍊'
      },
      {
        id: 6,
        image: '🍉'
      },
      {
        id: 7,
        image: '🍭'
      },
      {
        id: 8,
        image: '🍏'
      },
      {
        id: 9,
        image: '🍓'
      },
      {
        id: 10,
        image: '🍋'
      },
      {
        id: 11,
        image: '🍑'
      },
      {
        id: 12,
        image: '🍒'
      },
      {
        id: 13,
        image: '🍊'
      },
      {
        id: 14,
        image: '🍉'
      },
      {
        id: 15,
        image: '🍭'
      },
      {
        id: 16,
        image: '🍏'
      }
    ]
    const showBtn = ref(true)
    const shuffledCards = cards.sort(() => 0.5 - Math.random())
    const startGame = () => {
      showBtn.value = false
    }
    return {
      cards,
      shuffledCards, 
      startGame, 
      showBtn
    }
  }
})
</script>