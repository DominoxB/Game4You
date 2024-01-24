<template>
  <div class="flex justify-center mt-20">
    <MemoryGameBoard />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MemoryGameBoard from '@/components/organisms/MemoryGameBoard.vue'

export default defineComponent({
  name: 'MemoryGame',
  components: {
    MemoryGameBoard
  },
})
</script>
