<template>
  <div class="bg-gray-900 min-h-screen overflow-hidden flex flex-col">
    <NavbarMenu />
    <router-view />
    <FooterContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavbarMenu from '@/components/molecules/NavbarMenu.vue'
import FooterContent from './components/atoms/FooterContent.vue'
export default defineComponent({
  name: 'App',
  components: {
    NavbarMenu,
    FooterContent
  }
})
</script>
