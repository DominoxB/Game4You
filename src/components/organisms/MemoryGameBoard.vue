<template>
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8">
      <div class="text-white text-5xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500">Memory Game</div>
      <button class="border p-1 text-white text-3xl mt-8" @click="startGame">START</button>
    </div>
    <div v-else>
      <MemoryInfoBoard />
      <Timer v-if="!showBtn" class="mx-auto" />
    </div>
    <div class="grid grid-cols-4 grid-rows-4 w-[480px] h-[480px]">
      <div v-for="card in shuffledCards" :key="card.id">
        <CardItem :image="card.image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import CardItem from '../atoms/CardItem.vue'
import MemoryInfoBoard from '../atoms/MemoryInfoBoard.vue'
import Timer from '../atoms/Timer.vue'
import { useMemoryStore } from '@/stores/memoryStore'

export default defineComponent({
  name: 'MemoryGameBoard',
  components: {
    CardItem,
    MemoryInfoBoard,
    Timer
  },
  setup() {
    const cardsStore = useMemoryStore()
    const { cards } = storeToRefs(cardsStore)
    const showBtn = ref(true)
    const shuffledCards = cards.value.sort(() => 0.5 - Math.random())
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