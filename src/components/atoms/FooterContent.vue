<template>
  <div class="text-white text-sm md:text-lg mt-auto flex justify-end mr-2">
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
