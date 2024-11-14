<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl">
      <p class="text-xl text-stone-500">這是房型頁</p>
      <p class="pt-2 font-elf text-3xl font-bold text-stone-500">Page: ㄓㄜˋㄕˋㄈㄤˊㄒㄧㄥˊㄧㄝˋ</p>
      <p class="pt-2 font-elf text-2xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
    </div>
  </main>
</template>

<style scoped></style>
