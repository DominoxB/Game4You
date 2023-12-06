<template>
  <div>
    <CardItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardItem from '@/components/atoms/CardItem.vue'
export default defineComponent({
  name: 'MemoryGame',
  components: {
    CardItem
  }
})
</script>