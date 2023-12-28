<template>
  <div class="flex justify-center items-center bg-gray-900 h-32 text-indigo-300 font-chacra">
    <div class="flex space-x-8 cursor-pointer uppercase">
      <Dropdown title="Nasze Gry" :items="games" />
      <span class="border-b-2 p-2 border-solid border-transparent hover:border-b-pink-900 text-md">O
        nas</span>
    </div>
    <router-link to="/">
      <HomeLogo />
    </router-link>
    <div class="flex text-md space-x-8 cursor-pointer uppercase">
      <span
        class="p-2 border-b-2 border-solid border-transparent hover:border-b-pink-900">Współpraca</span>
      <span
        class="p-2 border-b-2 border-solid border-transparent hover:border-b-pink-900">Kontakt</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeLogo from '@/components/atoms/HomeLogo.vue'
import Dropdown from '@/components/atoms/Dropdown.vue'

export default defineComponent({
  name: 'NavbarMenu',
  components: {
    HomeLogo,
    Dropdown
  },
  setup() {
    const games = [
      {
        id: 1,
        title: 'Memory Game',
        url: '/MemoryGame'
      },
      {
        id: 2,
        title: 'Kółko i krzyżyk',
        url: '/TicTacToeGame'
      },
    ]
    return {
      games
    }
  }
})
</script>