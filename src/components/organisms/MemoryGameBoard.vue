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
        image: require('../images/happy.png'),
        name: 'Happy'
      },
      {
        id: 2,
        image: require('../images/happy.png'),
        name: 'Happy'
      },
      {
        id: 3,
        image: require('../images/dog.png'),
        name: 'Dog'
      },
      {
        id: 4,
        image: require('../images/dog.png'),
        name: 'Dog'
      },
      {
        id: 5,
        image: require('../images/doggy.png'),
        name: 'Doggy'
      },
      {
        id: 6,
        image: require('../images/doggy.png'),
        name: 'Doggy'
      },
      {
        id: 7,
        image: require('../images/shiba.png'),
        name: 'Shiba'
      },
      {
        id: 8,
        image: require('../images/shiba.png'),
        name: 'Shiba'
      },
      {
        id: 9,
        image: require('../images/golden-retriever.png'),
        name: 'Golden'
      },
      {
        id: 10,
        image: require('../images/golden-retriever.png'),
        name: 'Golden'
      },
      {
        id: 11,
        image: require('../images/dogs.png'),
        name: 'Dogs'
      },
      {
        id: 12,
        image: require('../images/dogs.png'),
        name: 'Dogs'
      },
      {
        id: 13,
        image: require('../images/bone.png'),
        name: 'Bone'
      },
      {
        id: 14,
        image: require('../images/bone.png'),
        name: 'Bone'
      },
      {
        id: 15,
        image: require('../images/pet.png'),
        name: 'Pet'
      },
      {
        id: 16,
        image: require('../images/pet.png'),
        name: 'Pet'
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