<template>
  <div ref="dropdown" class="z-20">
    <div
      class="relative flex py-2 border-b-2 justify-center border-solid border-transparent hover:border-b-pink-900 w-[76px] md:w-[84px]"
      @click="isOpen = !isOpen">
      <span>{{ title }}</span>
      <svg viewBox="0 0 1030 638" class="flex w-1.5 md:w-2 ml-1">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF">
        </path>
      </svg>
    </div>
    <div v-if="isOpen" class="absolute bg-gray-800 rounded-b-2xl text-center">
      <div v-for="(item, i) in items" :key="i">
        <router-link :to="item.url">
          <div @click="isOpen = !isOpen"
            class="py-2 px-4 border-b-2 border-solid border-transparent hover:bg-gray-700 hover:last:rounded-b-2xl hover:border-b-pink-900 font-roboto text-xs md:text-sm">
            <span>{{ item.title }}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

interface Item {
  url: string,
  title: string
}

export default defineComponent({
  name: 'DropdownNavbar',
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array as PropType<Item[]>,
      required: true,
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdown = ref(null)
    onClickOutside(dropdown, () => {
      isOpen.value = false
    })
    return {
      isOpen,
      dropdown
    }
  }
})
</script>
