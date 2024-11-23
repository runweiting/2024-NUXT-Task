<script setup lang="ts">
const { errorToast } = useSweetAlert()
const route = useRoute()
const router = useRouter()
const { getRoomInfo } = useRoom()
// 使用型別守衛
if (!route.params.id || Array.isArray(route.params.id)) {
  errorToast('無效的房間 ID')
  throw createError({
    statusCode: 404,
    message: '無效的房間 ID'
  })
}
const { room, hasError, isLoading, refresh } = await getRoomInfo(route.params.id)

// 使用 computed 處理共用的值
const pageTitle = computed(() => room.value.name)
const pageDescription = computed(() => room.value.description.replace(/\n/g, ' ').substring(0, 30))
const pageImage = computed(() => room.value.imageUrl)
const pageUrl = computed(() => `https://localhost/3000${route.fullPath}`)

useHeadSafe({
  title: () => room.value.name
})
useSeoMeta({
  description: pageDescription,
  // Open Graph
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage: pageImage,
  ogImageAlt: pageTitle,
  ogUrl: pageUrl,
  // Twitter
  twitterCard: 'summary_large_image',
  twitterSite: '', // Twitter 帳號
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
  twitterImage: pageImage,
  twitterImageAlt: pageTitle
})
</script>

<template>
  <div v-if="isLoading" class="text-center">
    <p class="text-gray-500">Loading rooms...</p>
  </div>
  <div v-else-if="hasError">
    <p class="text-red-600">Failed to load rooms. Please try again.</p>
    <button type="button" class="btn mt-2" @click="refresh()">Retry</button>
  </div>
  <section v-else class="group w-full max-w-sm lg:max-w-full">
    <div class="overflow-hidden rounded-xl">
      <img
        :src="room.imageUrl"
        :alt="room.name"
        class="h-[600px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div class="flex flex-col justify-between bg-white p-4 leading-normal">
      <div class="mb-8">
        <div class="mb-2 text-xl font-bold text-stone-900">
          {{ room.name }}
        </div>
        <p class="text-base text-stone-700">
          {{ room.description }}
        </p>
      </div>
      <h3 class="font-bold text-stone-900">房型基本資訊</h3>
      <div class="mb-4 flex space-x-2">
        <div class="h-[100px] w-[100px] rounded-md border border-stone-300 p-4">
          <Icon class="mb-2 h-5 w-5 text-stone-400" name="mdi:floor-plan" />
          <p class="text-stone-700">{{ room.areaInfo }}</p>
        </div>
        <div class="h-[100px] w-[100px] rounded-md border border-stone-300 p-4">
          <Icon class="mb-2 h-5 w-5 text-stone-400" name="mdi:bed-empty" />
          <p class="text-stone-700">{{ room.bedInfo }}</p>
        </div>
        <div class="h-[100px] w-[100px] border border-stone-300 p-4 last:rounded-md">
          <Icon class="mb-2 h-5 w-5 text-stone-400" name="mdi:people" />
          <p class="text-stone-700">2-{{ room.maxPeople }}人</p>
        </div>
      </div>
      <h3 class="font-bold text-stone-900">房間格局</h3>
      <div class="mb-4 flex flex-auto gap-4 rounded-md border border-stone-300 p-4">
        <div v-for="item in room.layoutInfo" :key="item.title" class="flex items-center">
          <Icon class="mr-1 h-5 w-5 text-stone-400" name="mdi:check" />
          <p class="text-stone-700">{{ item.title }}</p>
        </div>
      </div>
      <h3 class="font-bold text-stone-900">房內設備</h3>
      <div class="mb-4 flex flex-auto gap-4 rounded-md border border-stone-300 p-4">
        <div v-for="item in room.facilityInfo" :key="item.title" class="flex items-center">
          <Icon class="mr-1 h-5 w-5 text-stone-400" name="mdi:check" />
          <p class="text-stone-700">{{ item.title }}</p>
        </div>
      </div>
      <h3 class="font-bold text-stone-900">備品提供</h3>
      <div class="mb-4 flex flex-auto gap-4 rounded-md border border-stone-300 p-4">
        <div v-for="item in room.amenityInfo" :key="item.title" class="flex items-center">
          <Icon class="mr-1 h-5 w-5 text-stone-400" name="mdi:check" />
          <p class="text-stone-700">{{ item.title }}</p>
        </div>
      </div>
      <div class="my-4 h-0.5 w-full bg-gradient-to-r from-stone-500"></div>
      <div class="mb-4 flex justify-between">
        <p class="text-2xl text-stone-500">{{ room.price }}</p>
        <button type="button" class="btn" @click="router.push('/rooms')">回到上一頁</button>
      </div>
      <div class="flex items-center justify-between text-stone-500">
        <p class="leading-none">createdAt: {{ room.createdAt }}</p>
        <p class="leading-non">updatedAt: {{ room.updatedAt }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
