<template>
  <div class="text-white border border-indigo-300 w-[120px] h-[120px] flex items-center justify-center cursor-pointer" @click="$emit('clickCard')">
    {{ cardValue }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CardItemTicTacToe',
  props: {
    cardValue: {
      type: String,
      default: ''
    }
  },
  emits: ['clickCard'],
})
</script>
