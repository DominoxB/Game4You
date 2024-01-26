<template>
  <div class="flex justify-center mt-20">
    <MemoryGameBoard />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import MemoryGameBoard from '@/components/organisms/MemoryGameBoard.vue'

export default defineComponent({
  name: 'MemoryGame',
  components: {
    MemoryGameBoard
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
})
</script>
