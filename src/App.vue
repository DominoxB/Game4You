<template>
  <div class="bg-gray-900 min-h-screen overflow-hidden flex flex-col">
    <div id="charger" class="pr-2 pt-2 font-rubik bg-gray-900 text-white flex justify-end">
      <select v-model="$i18n.locale" class="cursor-pointer bg-gray-900">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
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
