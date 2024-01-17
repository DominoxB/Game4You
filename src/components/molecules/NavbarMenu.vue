<template>
  <div class="flex justify-center items-center h-32 text-white text-lg">
    <div class="flex cursor-pointer uppercase">
      <Dropdown title="Nasze Gry" :items="games" />
    </div>
    <router-link to="/">
      <HomeLogo />
    </router-link>
    <router-link to="/AboutUs">
      <div class="flex text-md cursor-pointer uppercase">
        <span class="border-b-2 py-2 border-solid border-transparent hover:border-b-pink-900">O
          nas</span>
      </div>
    </router-link>
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
        title: 'Gra Memory',
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