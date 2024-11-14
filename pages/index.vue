<script setup lang="ts">
const route = useRoute()
const title = ref('首頁')
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl">
      <p class="text-xl text-stone-500">這是{{ title }}</p>
      <p class="pt-2 font-elf text-3xl font-bold text-stone-500">Page: ㄓㄜˋㄕˋㄕㄡˇㄧㄝˋ</p>
      <p class="pt-2 font-elf text-2xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
      <p class="pt-4 text-3xl font-semibold text-stone-700">最新消息</p>
      <div class="mb-4 grid grid-cols-1 gap-2 pt-2">
        <NewsCard />
      </div>
      <div class="mb-4 grid grid-cols-1 gap-2 pt-2">
        <ProductCardHorizontal />
        <ProductCardHorizontal />
      </div>
      <div class="grid grid-cols-3 gap-2">
        <ProductCardStacked />
        <ProductCardStacked />
        <ProductCardStacked />
      </div>
    </div>
  </main>
</template>
