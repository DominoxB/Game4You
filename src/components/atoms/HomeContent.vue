<template>
  <div class="mb-4">
    <div class="flex items-center justify-center text-white py-10 md:py-6">
      <span
        class="relative w-[max-content] font-silk text-2xl text-lime-200 sm:text-2xl uppercase before:absolute before:inset-0 before:animate-typewriter before:bg-gray-900 after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white md:text-3xl lg:text-4xl">
        {{ $t('question') }}
      </span>
    </div>
    <div
      class="justify-center text-center text-blue-200 space-x-24 font-silk text-xl md:text-2xl lg:text-3xl lg:flex lg:mt-12">
      <router-link to="/MemoryGame">
        <div class="cursor-pointer px-8 lg:px-0" @mouseover="hoverMemory = true" @mouseleave="hoverMemory = false">
          <span>{{ $t('memory') }}</span>
          <video width="445" height="445" autoplay muted v-if="hoverMemory && width >= 768" class="mt-2 mx-auto">
            <source src="../videos/memory.mp4" type="video/mp4">
          </video>
          <img src="@/components/images/mems.png" alt="Memory Game"
            class="border-4 border-indigo-800 rounded mt-2 mx-auto" v-else />
        </div>
      </router-link>
      <router-link to="/TicTacToeGame">
        <div class="cursor-pointer px-8 sm:px-0 mx-auto mt-12 lg:mt-0" @mouseover="hoverTicTacToe = true"
          @mouseleave="hoverTicTacToe = false">
          <span>{{ $t('tictac') }}</span>
          <video width="445" height="445" autoplay muted v-if="hoverTicTacToe && width >= 768" class="mt-2 mx-auto">
            <source src="../videos/tictactoe.mp4">
          </video>
          <img src="@/components/images/tictactoe.png" alt="Memory Game"
            class="border-[3px] border-indigo-800 rounded mt-2 mx-auto" v-else />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomeContent',
  setup() {
    const hoverMemory = ref(false)
    const hoverTicTacToe = ref(false)
    const width = ref(window.innerWidth)

    return {
      hoverMemory,
      hoverTicTacToe,
      width
    }
  }
})
</script>
