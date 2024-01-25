<template>
  <div>
    <div v-if="showBtn" class="font-silk text-center mb-8">
      <div class="text-white text-4xl md:text-5xl p-2 bg-gradient-to-r from-sky-500 to-indigo-500">{{  $t('memory') }}</div>
      <button class="border p-1 text-white text-3xl my-8 hover:bg-gray-700" @click="startGame">START</button>
      <img src="../images/memory.png" class="px-2" />
    </div>
    <div v-else>
      <div class="md:flex justify-center items-center md:space-x-10">
        <MemoryInfoBoard />
        <RefreshArrows @refresh="refreshGame" class="mt-5 md:mt-0" />
      </div>
      <Timer class="mx-auto" />
      <div class="grid grid-cols-4 grid-rows-4 w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] md:w-[480px] md:h-[480px]">
        <div v-for="card in cards" :key="card.id">
          <CardItemMemory :card="card" @click-card="pickCard" />
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
import { useRouter } from 'vue-router'
import CardItemMemory from '@/components/atoms/CardItemMemory.vue'
import MemoryInfoBoard from '@/components/atoms/MemoryInfoBoard.vue'
import Timer from '@/components/atoms/Timer.vue'
import ModalMemory from '@/components/atoms/ModalMemory.vue'
import RefreshArrows from '@/components/atoms/RefreshArrows.vue'

export default defineComponent({
  name: 'MemoryGameBoard',
  components: {
    CardItemMemory,
    MemoryInfoBoard,
    Timer,
    ModalMemory,
    RefreshArrows
  },
  setup() {
    const router = useRouter()
    const cardsStore = useMemoryStore()
    const { cards, selectedCards, pairedCards, showModal, movesCounter, mistakesCounter } = storeToRefs(cardsStore)
    const showBtn = ref(true)

    const shuffledCards = () => {
      cards.value.sort(() => 0.5 - Math.random())
    }

    const startGame = () => {
      shuffledCards()
      showBtn.value = false
    }

    const pickCard = (card: any) => {
      if (selectedCards.value.length === 0) {
        selectedCards.value.push(card)
        return
      }
      if (selectedCards.value.length === 1) {
        selectedCards.value.push(card)
        if (selectedCards.value[0].name === selectedCards.value[1].name) {
          pairedCards.value.push(...selectedCards.value)
          movesCounter.value++
          selectedCards.value = []
        } else {
          setTimeout(() => {
            mistakesCounter.value++
            selectedCards.value = []
          }, 1000)
        }
      }
      if (selectedCards.value.length > 1) {
        movesCounter.value++
        return
      }
      if (pairedCards.value.length === 16) {
        showModal.value = true
      }
    }

    const refreshGame = () => {
      selectedCards.value = []
      pairedCards.value = []
      movesCounter.value = 0
      mistakesCounter.value = 0
      shuffledCards()
    }

    const newGame = () => {
      pairedCards.value = []
      selectedCards.value = []
      showModal.value = false
      showBtn.value = true
      movesCounter.value = 0
      mistakesCounter.value = 0
    }

    const cancel = () => {
      pairedCards.value = []
      selectedCards.value = []
      movesCounter.value = 0
      mistakesCounter.value = 0
      router.push('/')
      showModal.value = false
    }
    return {
      cards,
      showBtn,
      pairedCards,
      showModal,
      shuffledCards,
      startGame,
      pickCard,
      newGame,
      cancel,
      refreshGame
    }
  }
})
</script>
