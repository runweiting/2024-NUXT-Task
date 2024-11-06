<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main class="container">
    <div class="m-8 h-auto rounded-3xl bg-black p-20">
      <p class="font-elf pt-12 text-9xl font-bold text-white">Page: ㄓㄜˋㄕˋㄕㄡˇㄧㄝˋ</p>
      <p class="font-elf pt-12 text-6xl text-gray-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
    </div>
  </main>
</template>
