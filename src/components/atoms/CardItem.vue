<template>
  <div class="text-white border w-[120px] h-[120px]" @click="isVisible = !isVisible">
      <div v-if="isVisible">Obrazek</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CardItem',
  setup() {
    const isVisible = ref(false)
    return {
      isVisible
    }
  }
})
</script>