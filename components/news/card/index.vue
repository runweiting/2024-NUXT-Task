<script setup lang="ts">
const { newsList, hasError, isLoading, refresh } = useHome()
</script>

<template>
  <div v-if="isLoading" class="text-center">
    <p class="text-gray-500">Loading news...</p>
  </div>
  <div v-else-if="hasError" class="text-center">
    <p class="text-red-600">Failed to load news. Please try again.</p>
    <button type="button" class="btn mt-2" @click="refresh()">Retry</button>
  </div>
  <section
    v-for="news in newsList"
    v-else
    :key="news._id"
    class="group w-full max-w-sm lg:flex lg:max-w-full"
  >
    <NewsCardImage :image="news.image" :alt-text="news.altText" />
    <NewsCardContent
      :title="news.title"
      :description="news.description"
      :created-at="news.createdAt"
      :updated-at="news.updatedAt"
    />
  </section>
</template>

<style scoped></style>
