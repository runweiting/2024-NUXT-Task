<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'admin'
})
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl">
      <p class="text-xl text-white">這是 admin/index 頁</p>
      <p class="pt-2 font-elf text-3xl font-bold text-stone-500">
        Page: ㄓㄜˋㄕˋㄏㄡˋㄊㄞˊㄕㄡˇㄧㄝˋ
      </p>
      <p class="pt-2 font-elf text-2xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
    </div>
  </main>
</template>

<style scoped></style>
