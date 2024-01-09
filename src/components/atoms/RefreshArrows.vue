<template>
  <div @click="$emit('refresh')" class="flex justify-center cursor-pointer">
    <img src="../images/refresh.png" class="w-10" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RefreshArrows',
  emits: ['refresh']
})
</script>

