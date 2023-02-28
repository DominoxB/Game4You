<template>
  <div>
    <div 
      class="flex py-3 px-2 border-b-2 border-solid border-transparent hover:bg-gray-700 hover:border-b-pink-900"
      @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <svg viewBox="0 0 1030 638" width="10" class="flex ml-5">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF">
        </path>
      </svg>
    </div>
      <div v-if="isOpen" class="absolute bg-gray-800 rounded-b-2xl">
        <div v-for="(item, i) in items" :key="i"
          class="p-2 border-b-2 border-solid border-transparent hover:bg-gray-700 normal-case hover:border-b-pink-900">
          <span>{{ item.title }}</span>
        </div>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'DropdownNavbar',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    return {
      isOpen
    }
  }
}
</script>