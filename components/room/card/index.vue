<script setup lang="ts">
const { roomTypeList, hasError, isLoading, refresh } = useRoomType()
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
    <section class="group w-full max-w-sm lg:flex lg:max-w-full">
      <div
        class="h-48 flex-none overflow-hidden rounded-t lg:h-auto lg:rounded-l lg:rounded-r-none"
      >
        <img
          :src="room.imageUrl"
          :alt="room.name"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div
        class="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400"
      >
        <div class="mb-8">
          <div class="mb-2 text-xl font-bold text-gray-900">
            {{ room.name }}
          </div>
          <p class="text-base text-gray-700">
            {{ room.description }}
          </p>
        </div>
        <div class="mb-4 flex space-x-2">
          <div class="h-[100px] w-[100px] rounded-md border border-stone-300 p-4">
            <Icon class="mb-2 h-5 w-5 text-stone-400" name="mdi:floor-plan" />
            <p class="text-stone-500">{{ room.areaInfo }}</p>
          </div>
          <div class="h-[100px] w-[100px] rounded-md border border-stone-300 p-4">
            <Icon class="mb-2 h-5 w-5 text-stone-400" name="mdi:bed-empty" />
            <p class="text-stone-500">{{ room.bedInfo }}</p>
          </div>
          <div class="h-[100px] w-[100px] border border-stone-300 p-4 last:rounded-md">
            <Icon class="mb-2 h-5 w-5 text-stone-400" name="mdi:people" />
            <p class="text-stone-500">2-{{ room.maxPeople }}人</p>
          </div>
        </div>
        <div class="my-4 h-0.5 w-full bg-gradient-to-r from-stone-500"></div>
        <div class="mb-4">
          <p class="text-2xl text-stone-500">{{ room.price }}</p>
        </div>
        <div class="flex items-center justify-between text-stone-500">
          <p class="leading-none">createdAt: {{ room.createdAt }}</p>
          <p class="leading-non">updatedAt: {{ room.updatedAt }}</p>
        </div>
      </div>
    </section>
  </NuxtLink>
</template>

<style scoped></style>
