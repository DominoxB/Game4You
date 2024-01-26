<template>
  <div class="flex justify-center items-center mt-20">
    <TicTacToeGameBoard />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TicTacToeGameBoard from '@/components/organisms/TicTacToeGameBoard.vue'

export default defineComponent({
  name: 'TicTacToeGame',
  components: {
    TicTacToeGameBoard
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
})
</script>
