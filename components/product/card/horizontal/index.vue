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
  <section class="w-full max-w-sm lg:flex lg:max-w-full">
    <div
      class="h-48 flex-none overflow-hidden rounded-t lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
    >
      <img
        :src="articleCard.imageUrl"
        :alt="articleCard.altText"
        class="h-full w-full object-cover"
      />
    </div>
    <div
      class="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400"
    >
      <div class="mb-8">
        <p class="flex items-center text-sm text-gray-600">
          <svg
            class="mr-2 h-3 w-3 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
            />
          </svg>
          {{ articleCard.badge }}
        </p>
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
