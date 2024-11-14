<script setup lang="ts">
interface Props {
  image: string
  altText?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="h-48 flex-none overflow-hidden rounded-t lg:h-auto lg:w-48 lg:rounded-l lg:rounded-r-none"
  >
    <img
      :src="image"
      :alt="altText || 'News image'"
      class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      loading="lazy"
    />
  </div>
</template>
