<template>
  <div>
    <audio hidden="true" ref="audio">
      <source src="../sounds/woof.mp3" type="audio/mpeg">
    </audio>
  </div>
  <div>
    <transition name="text" appear enter-active-class="transition-all duration-700 ease-in-out"
      enter-from-class="opacity-0">
      <div class="relative z-50 transition ease-in-out delay-200">
        <div
          class="bg-gray-900 fixed h-[480px] text-white font-silk left-1/2 top-1/2 mt-[89px] transform -translate-x-1/2 -translate-y-1/2 border-2 border-indigo-300 px-24 py-10 text-center">
          <div class="flex justify-center mb-10">
            <img src="../images/dogsy.jpg" alt="doggy" class="w-40"/>
          </div>
            <p class="text-2xl">Gramy jeszcze raz?</p>
            <div class="flex justify-center mt-10">
              <button @click="$emit('clickYes')"
                class="border border-indigo-300 hover:bg-blue-400 rounded text-center text-lg p-2 mr-10">
                Tak
              </button>
              <button @click="$emit('clickCancel')"
                class="w-[136px] border border-indigo-300 hover:bg-blue-400 rounded text-center text-lg p-1">
                Anuluj
              </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: "ModalMemory",
  emits: ['clickYes', 'clickCancel'],
  setup() {
    const audio = ref<HTMLAudioElement>();
    onMounted(() => {
      audio.value?.play()
    });
    return {
      audio
    }
  }
})
</script>