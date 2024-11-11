<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl p-10">
      <p class="text-3xl text-white">這是 admin/index 頁</p>
      <p class="pt-12 font-elf text-7xl font-bold text-white">Page: ㄓㄜˋㄕˋㄏㄡˋㄊㄞˊㄕㄡˇㄧㄝˋ</p>
      <p class="pt-12 font-elf text-6xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
    </div>
  </main>
</template>

<style scoped></style>
