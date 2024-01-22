<template>
  <div class="mt-8 md:absolute inset-x-0 bottom-0 text-right pr-4 text-white">
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