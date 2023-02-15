<template>
  <div class="flex justify-center bg-black">
    <div class="flex text-md text-white font-kanit space-x-14 mt-8 cursor-pointer pt-10 pb-4 uppercase">
    <span>Gry</span>
    <span>O nas</span>
  </div>
  <HomeLogo />
  <div class="flex text-md text-white font-kanit space-x-8 mt-8 cursor-pointer pt-10 uppercase">
    <span>Współpraca</span>
    <span>Kontakt</span>
  </div>
</div>
</template>

<script>
import HomeLogo from '@/components/atoms/HomeLogo.vue'
export default {
  name: 'NavbarMenu',
  components: {
    HomeLogo
  }
}
</script>