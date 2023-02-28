<template>
  <div class="bg-gray-900">
    <NavbarMenu />
    <router-view />
    <FooterContent />
</div>
</template>

<script>
import NavbarMenu from '@/components/molecules/NavbarMenu.vue'
import FooterContent from './components/atoms/FooterContent.vue';

export default {
  name: 'App',
  components: {
    NavbarMenu,
    FooterContent
  }
}
</script>
