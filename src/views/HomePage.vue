<template>
  <HomeContent />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HomeContent from '@/components/atoms/HomeContent.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    HomeContent
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
})
</script>
