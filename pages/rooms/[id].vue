<script setup lang="ts">
import type { ApiDataResponse } from '~/types/api/ApiResponse'
import type { RoomType } from '~/types/roomTypes'

const route = useRoute()
const router = useRouter()
const roomId = route.params.id

// 定義預設 room
const defaultRoom: RoomType = {
  name: '',
  description: '',
  imageUrl: '',
  imageUrlList: [],
  areaInfo: '',
  bedInfo: '',
  maxPeople: 0,
  price: 0,
  status: 0,
  layoutInfo: [],
  facilityInfo: [],
  amenityInfo: [],
  _id: '',
  createdAt: '',
  updatedAt: ''
}

const runtimeConfig = useRuntimeConfig()
const { hexSchoolApiUrl } = runtimeConfig.public
const { data, status, error, refresh } = useFetch<ApiDataResponse<RoomType>>(
  `${hexSchoolApiUrl}/api/v1/rooms/${roomId}`,
  {
    transform: (data) => {
      if (!data.status) return data
      const room = data.result
      return {
        ...data,
        result: {
          ...room,
          price: room.price.toLocaleString('zh-TW', {
            style: 'currency',
            currency: 'TWD',
            // 設定最少 0 位小數，最多 0 位小數
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }),
          createdAt: date2LocaleString(room.createdAt),
          updatedAt: date2LocaleString(room.updatedAt)
        }
      }
    }
  }
)
const room = computed(() => (data.value?.status ? data.value?.result : defaultRoom))
const hasError = computed(() => error.value !== null)
const isLoading = computed(() => status.value === 'pending')
const date2LocaleString = (date: string) => new Date(date).toLocaleDateString()
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
