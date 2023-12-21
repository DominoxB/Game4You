<template>
  <div>
    <transition name="text" appear enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="opacity-0">
      <div class="relative z-50 transition ease-in-out delay-200">
        <div
          class="bg-gray-900 bg-opacity-95 fixed h-[480px] text-white font-silk left-1/2 top-1/2 mt-[89px] transform -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300 p-10 md:p-24 text-center">
          <div class="">
            <p class="text-2xl">Gramy jeszcze raz?</p>
            <div class="flex justify-center mt-10">
              <button @click="clickYes"
                class="border border-indigo-300 hover:bg-blue-400 rounded text-center text-lg p-2 mr-10">
                Tak
              </button>
              <button @click="clickCancel"
                class="w-[136px] border border-indigo-300 hover:bg-blue-400 rounded text-center text-lg p-1">
                Anuluj
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ModalMemory",
  emits: ['new-game', 'cancel-action'],
  setup(props, context) {
    const clickYes = () => {
      context.emit('new-game')
    }
    const clickCancel = () => {
      context.emit("cancel-action")
    }

    return {
      clickYes,
      clickCancel,
    }
  }
})
</script>