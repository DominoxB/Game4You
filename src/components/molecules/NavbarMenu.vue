<template>
  <div class="flex justify-center items-center text-white text-sm mt-8 md:h-32 md:text-lg md:mt-0">
    <div class="flex cursor-pointer font-silk mr-2">
      <Dropdown :title="$t('games')" :items="games" />
    </div>
    <router-link to="/Game4You">
      <HomeLogo />
    </router-link>
    <router-link to="/AboutUs">
      <div class="flex text-md cursor-pointer uppercase font-silk">
        <span class="border-b-2 py-2 ml-4 border-solid border-transparent hover:border-b-pink-900">{{ $t('us') }}</span>
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
        title: 'Memory',
        url: '/MemoryGame'
      },
      {
        id: 2,
        title: 'O i X',
        url: '/TicTacToeGame'
      },
    ]
    return {
      games
    }
  }
})
</script>
