<script setup lang="ts">
const route = useRoute()
const title = ref('2024')
</script>

<template>
  <main class="container">
    <div class="m-8 h-auto rounded-3xl bg-black p-20">
      <p class="text-white">{{ title }}</p>
      <p class="pt-12 font-elf text-9xl font-bold text-white">Page: ㄓㄜˋㄕˋㄕㄡˇㄧㄝˋ</p>
      <p class="pt-12 font-elf text-6xl text-gray-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
      <button class="bg-sky-700 px-4 py-2 hover:bg-sky-800 sm:px-8 sm:py-3">...</button>
      <button class="bg-sky-700 px-4">...</button>
      <p class="bg-violet-200 text-2xl">123</p>
    </div>
  </main>
</template>
