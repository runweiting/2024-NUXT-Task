<script setup lang="ts">
interface ArticleData {
  title: string
  description: string
  imageUrl: string
  altText: string
  badge: string
  name: string
  date: string
  avatarUrl: string
  avatarText: string
}
const articleCard = reactive<ArticleData>({
  title: 'Day 5 - 使用指令建立 Composables',
  description: '今日學習目標：學習使用指令建立 Composables、學習透過 Auto Imports 使用 Composables',
  imageUrl: 'https://fakeimg.pl/300/',
  altText: 'fakeimg',
  badge: 'Members only',
  name: 'runweiting',
  date: 'Nov 12',
  avatarUrl: 'https://fakeimg.pl/300/',
  avatarText: 'Avatar of runweiting'
})
</script>

<template>
  <section class="group w-full max-w-sm lg:flex lg:max-w-full">
    <div
      class="h-48 flex-none overflow-hidden rounded-t lg:h-auto lg:w-48 lg:rounded-l lg:rounded-r-none"
    >
      <img
        :src="articleCard.imageUrl"
        :alt="articleCard.altText"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div
      class="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400"
    >
      <div class="mb-8">
        <div class="flex items-center space-x-2 text-sm text-stone-500">
          <Icon class="h-5 w-5" name="mdi:lock" />
          <p>{{ articleCard.badge }}</p>
        </div>
        <div class="mb-2 text-xl font-bold text-gray-900">
          {{ articleCard.title }}
        </div>
        <p class="text-base text-gray-700">
          {{ articleCard.description }}
        </p>
      </div>
      <div class="flex items-center">
        <img
          class="mr-4 h-10 w-10 rounded-full"
          :src="articleCard.avatarUrl"
          :alt="articleCard.avatarText"
        />
        <div class="text-sm">
          <p class="leading-none text-gray-900">{{ articleCard.name }}</p>
          <p class="text-gray-600">{{ articleCard.date }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
