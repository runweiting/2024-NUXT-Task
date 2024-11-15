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
      <p class="pt-4 text-3xl font-semibold text-stone-700">房型列表</p>
      <div class="mb-4 grid grid-cols-1 gap-6 pt-2">
        <RoomCard />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
