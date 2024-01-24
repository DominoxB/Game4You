<template>
  <div
    class="text-white text-sm md:text-basic mt-8 flex justify-end inset-x-0 relative lg:absolute">
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
