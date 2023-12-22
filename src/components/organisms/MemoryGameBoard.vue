<template>
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8">
      <div class="text-white text-5xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500">Memory Game</div>
      <button class="border p-1 text-white text-3xl my-8" @click="startGame">START</button>
      <img src="../images/memory.png" />
    </div>
    <div v-else>
      <MemoryInfoBoard />
      <Timer class="mx-auto" />
      <div class="grid grid-cols-4 grid-rows-4 w-[480px] h-[480px]">
        <div v-for="card in shuffledCards" :key="card.id">
          <CardItem :card="card" @click-card="pickCard" />
        </div>
        <ModalMemory v-if="showModal" @click-yes="newGame" @click-cancel="cancel" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMemoryStore } from '@/stores/memoryStore'
import CardItem from '@/components/atoms/CardItem.vue'
import MemoryInfoBoard from '@/components/atoms/MemoryInfoBoard.vue'
import Timer from '@/components/atoms/Timer.vue'
import ModalMemory from '@/components/atoms/ModalMemory.vue'
import router from '@/router'

export default defineComponent({
  name: 'MemoryGameBoard',
  components: {
    CardItem,
    MemoryInfoBoard,
    Timer,
    ModalMemory
  },
  setup() {
    const cardsStore = useMemoryStore()
    const { cards, selectedCards, pairedCards } = storeToRefs(cardsStore)
    const showBtn = ref(true)
    const showModal = ref(false)

    const shuffledCards = cards.value.sort(() => 0.5 - Math.random())
    const startGame = () => {
      showBtn.value = false
    }

    const pickCard = (card: any) => {
      if (selectedCards.value.length === 0) {
        selectedCards.value.push(card)
        console.log(selectedCards.value)
        return
      }
      if (selectedCards.value.length === 1) {
        selectedCards.value.push(card)
        if (selectedCards.value[0].name === selectedCards.value[1].name) {
          pairedCards.value.push(...selectedCards.value)
          selectedCards.value = []
        } else {
          setTimeout(() => {
            selectedCards.value = []
          }, 1000)
        }
      }
      if (selectedCards.value.length > 1) {
        return
      }
      if (pairedCards.value.length === 16) {
        showModal.value = true
      }
    }

    const newGame = () => {
      pairedCards.value = []
      selectedCards.value = []
      showModal.value = false
      showBtn.value = true
    }

    const cancel = () => {
      pairedCards.value = []
      selectedCards.value = []
      router.push('/')
      showModal.value = false
    }
    return {
      cards,
      shuffledCards,
      startGame,
      showBtn,
      pickCard,
      pairedCards,
      newGame,
      cancel,
      showModal
    }
  }
})
</script>