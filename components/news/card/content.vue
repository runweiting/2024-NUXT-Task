<script setup lang="ts">
defineProps<{
  title: string
  description: string
  createdAt: string
  updatedAt: string
}>()
</script>

<template>
  <div
    class="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400"
  >
    <div class="mb-8">
      <div class="mb-2 text-xl font-bold text-gray-900">
        {{ title }}
      </div>
      <p class="text-base text-gray-700">
        {{ description }}
      </p>
    </div>
    <div class="flex items-center justify-between">
      <p class="leading-none text-gray-900">createdAt: {{ createdAt }}</p>
      <p class="leading-none text-gray-600">updatedAt: {{ updatedAt }}</p>
    </div>
  </div>
</template>
