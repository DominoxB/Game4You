<template>
  <div
    class="text-[85px] font-silk border border-indigo-300 w-[150px] h-[150px] flex items-center justify-center cursor-pointer"
    @click="clickCard">
    <span class="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text" v-if="isX">{{ cardValue
    }}</span>
    <span class="bg-gradient-to-r from-blue-500 via-green-500 to-violet-500 text-transparent bg-clip-text" v-else>{{
      cardValue }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'CardItemTicTacToe',
  props: {
    id: {
      type: Number,
    },
    isX: {
      type: Boolean,
    },
    isO: {
      type: Boolean,
    }
  },
  emits: ['showSign'],
  setup(props, context) {

    const cardValue = computed(() => {
      if (props.isX) {
        return 'X'
      } else if (props.isO) {
        return 'O'
      } else {
        return ''
      }
    })

    const clickCard = () => {
      if (props.isO || props.isX) {
        return
      }
      context.emit('showSign', props.id)
    }
    return {
      cardValue,
      clickCard
    }
  }
})
</script>
