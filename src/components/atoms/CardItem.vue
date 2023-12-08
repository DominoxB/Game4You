<template>
  <div class="text-white border border-indigo-300 w-[120px] h-[120px] flex items-center justify-center"
    @click="isVisible = !isVisible">
    <div v-if="isVisible">
      <img :src="image" alt="dog"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'CardItem',
  props: {
    image: {
      type: String,
      required: true
    }
  },
  setup() {
    const isVisible = ref(false)
    return {
      isVisible
    }
  }
})
</script>