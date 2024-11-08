<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'dark'
})
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl p-20">
      <p class="text-3xl text-white">這是 about 頁面</p>
      <p class="pt-12 font-elf text-9xl font-bold text-white">Page: ㄓㄜˋㄕˋㄍㄨㄢㄩˊㄧㄝˋ</p>
      <p class="pt-12 font-elf text-6xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
    </div>
  </main>
</template>

<style scoped></style>
