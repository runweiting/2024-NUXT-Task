<script setup lang="ts">
const route = useRoute()
const title = ref('首頁')
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl p-10">
      <p class="text-3xl text-stone-500">這是{{ title }}</p>
      <p class="pt-12 font-elf text-7xl font-bold text-stone-500">Page: ㄓㄜˋㄕˋㄕㄡˇㄧㄝˋ</p>
      <p class="pt-12 font-elf text-6xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
    </div>
  </main>
</template>
