<template>
  <div class="flex justify-center bg-gray-900">
    <div class="flex items-center text-white font-kanit space-x-8 mt-8 cursor-pointer uppercase">
      <Dropdown title="Nasze Gry" :items="games" />
      <span class="p-3 border-b-2 border-solid border-transparent hover:bg-gray-700 hover:border-b-pink-900 text-md">O
        nas</span>
    </div>
    <router-link to="/">
      <HomeLogo />
    </router-link>
    <div class="flex p-3 items-center text-md text-white font-kanit space-x-8 mt-8 cursor-pointer uppercase text-md">
      <span
        class="p-3 border-b-2 border-solid border-transparent hover:bg-gray-700 hover:border-b-pink-900">Współpraca</span>
      <span
        class="p-3 border-b-2 border-solid border-transparent hover:bg-gray-700 hover:border-b-pink-900">Kontakt</span>
    </div>
  </div>
</template>

<script>
import HomeLogo from '@/components/atoms/HomeLogo.vue'
import Dropdown from '@/components/atoms/Dropdown.vue'

export default {
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
        url: '/MemoryPage'
      },
      {
        id: 2,
        title: 'Kółko i krzyżyk',
        url: '/TicTacToePage'
      },
    ]
    return {
      games
    }
  }
}
</script>