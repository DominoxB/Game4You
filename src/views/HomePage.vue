<template>
  <HomeContent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomeContent from '@/components/atoms/HomeContent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeContent
  }
})
</script>
