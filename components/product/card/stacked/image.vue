<script setup lang="ts">
defineProps<{
  url: string
  altText: string
}>()
</script>

<template>
  <img class="w-full" :src="url" :alt="altText" />
</template>
