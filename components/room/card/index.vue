<script setup lang="ts">
const { getRoomList } = useRoom()
const { roomTypeList, hasError, isLoading, refresh } = await getRoomList()
</script>

<template>
  <div v-if="isLoading" class="text-center">
    <Icon class="h-6 w-6 text-stone-500" name="eos-icons:loading" />
  </div>
  <div v-else-if="hasError">
    <p class="text-red-600">Failed to load rooms. Please try again.</p>
    <button type="button" class="btn mt-2" @click="refresh()">Retry</button>
  </div>
  <NuxtLink
    v-for="room in roomTypeList"
    v-else
    :key="room._id"
    :to="`/rooms/${room._id}`"
    class="block transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
  >
    <section class="group max-w-md overflow-hidden rounded-xl shadow-md md:max-w-2xl lg:max-w-full">
      <div class="md:flex">
        <div class="overflow-hidden">
          <img
            :src="room.imageUrl"
            :alt="room.name"
            class="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-full"
          />
        </div>
        <div class="flex flex-col justify-between p-4">
          <div class="mb-8">
            <div class="mb-2 text-xl font-bold text-gray-900">
              {{ room.name }}
            </div>
            <p class="text-base text-gray-700">
              {{ room.description }}
            </p>
          </div>
          <div class="mb-4 flex space-x-2">
            <div class="h-20 w-20 rounded-md border border-stone-300 p-4 md:h-24 md:w-24">
              <Icon class="mb-1 h-5 w-5 text-stone-400" name="mdi:floor-plan" />
              <p class="text-stone-500">{{ room.areaInfo }}</p>
            </div>
            <div class="h-20 w-20 rounded-md border border-stone-300 p-4 md:h-24 md:w-24">
              <Icon class="mb-1 h-5 w-5 text-stone-400" name="mdi:bed-empty" />
              <p class="text-stone-500">1 大床</p>
            </div>
            <div class="h-20 w-20 rounded-md border border-stone-300 p-4 md:h-24 md:w-24">
              <Icon class="mb-1 h-5 w-5 text-stone-400" name="mdi:people" />
              <p class="text-stone-500">2-{{ room.maxPeople }}人</p>
            </div>
          </div>
          <div class="my-4 h-0.5 w-full bg-gradient-to-r from-stone-500"></div>
          <div class="mb-4">
            <p class="text-2xl text-stone-500">{{ room.price }}</p>
          </div>
          <div class="flex items-center justify-between text-sm text-stone-500">
            <p>createdAt: {{ room.createdAt }}</p>
            <p>updatedAt: {{ room.updatedAt }}</p>
          </div>
        </div>
      </div>
    </section>
  </NuxtLink>
</template>

<style scoped></style>
