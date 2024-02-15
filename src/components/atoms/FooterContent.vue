<template>
  <div class="text-white text-sm mt-auto flex justify-end mr-2 md:text-lg">
    <span>&copy; {{ $t('footer') }} {{ year }}</span>
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
