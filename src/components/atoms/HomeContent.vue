<template>
  <div class="mx-auto h-screen mt-10 bg-gray-900 my-auto">
    <div class="my-auto text-center p-8 text-white">
      <span class="text-xl font-dosis leading-10">Domino Games to miejsce dla ludzi, którzy cenią sobie gry - klasyki,
        takie jak memory! Sprawdź swoją pamięć, spróbuj szczęścia i znajdź wszystkie pary! A może wolisz zagrać w kółko i krzyżyk?
        Pamiętaj - tylko trzy takie same znaki w linii zaprowadzą Cię do zwycięstwa. Powodzenia!</span>
    </div>
    <div class="grid grid-cols-2 mt-10">
      <div class="m-auto transition lease-in-out delay-100 hover:scale-110 cursor-pointer z-0">
        <img src="@/components/images/memory-game.png" alt="Memory Game"
          class="w-[600px] h-[300px] border-4 border-white rounded" />
      </div>
      <div class="m-auto transition lease-in-out delay-100 hover:scale-110 cursor-pointer z-0">
        <img src="@/components/images/tictactoe.png" alt="Kółko i krzyżyk"
          class="w-[600px] h-[300px] border-4 border-white rounded" />
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomeContent'
}
</script>