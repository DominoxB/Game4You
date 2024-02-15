<template>
  <div class="font-roboto text-gray-300 animate-fade text-center text-lg md:text-xl lg:text-2xl">
    <div class="mx-10 md:mx-40 md:px-20 mt-12">
      <span>{{ $t('aboutUs') }}</span>
    </div>
    <div class="mx-auto py-6">
      <span>{{ $t('hangman1') }} <a href="https://dominoxb.github.io/gra-wisielec/" target="_blank"
          class="underline text-lime-300">{{ $t('hangman2') }}</a>
      </span>
      <img src="../images/hangman.png" alt="hangman" class="mx-auto" />
    </div>
  </div>
</template>
