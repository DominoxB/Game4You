<template>
  <div class="pt-8 fixed lg:absolute inset-x-0 bottom-0 text-right text-white">
    <span>&copy; Domino IT {{ year }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FooterContent',
  setup() {
    const today = new Date();
    let year = today.getFullYear();    
    return {
      year
    }
  }
})
</script>