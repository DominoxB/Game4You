<template>
  <div class="flex justify-center items-center text-white text-sm font-silk mt-8 md:h-32 md:text-lg md:mt-0">
    <div class="flex cursor-pointer" :class="$i18n.locale === 'en' ? 'mr-1 md:mr-4' : 'md:mr-2'">
      <Dropdown :title="$t('games')" :items="games" />
    </div>
    <router-link to="/Game4You">
      <HomeLogo />
    </router-link>
    <router-link to="/AboutUs">
      <div class="flex text-md cursor-pointer">
        <span class="border-b-2 py-2 border-solid border-transparent hover:border-b-pink-900"
          :class="$i18n.locale === 'en' ? 'ml-1.5 md:ml-3' : 'ml-2 md:ml-3'">{{ $t('us') }}</span>
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
