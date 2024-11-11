<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<template>
  <div class="px-3 pb-2 pt-2">
    <span
      v-for="tag in tags"
      :key="tag"
      class="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
      >#{{ tag }}</span
    >
  </div>
</template>
