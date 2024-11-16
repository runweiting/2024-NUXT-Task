<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl">
      <p class="text-xl text-stone-500">這是房型頁</p>
      <p class="pt-2 font-elf text-3xl font-bold text-stone-500">Page: ㄓㄜˋㄕˋㄈㄤˊㄒㄧㄥˊㄧㄝˋ</p>
      <p class="pt-2 font-elf text-2xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
      <p class="pt-4 text-3xl font-semibold text-stone-700">房型列表</p>
      <div class="mb-4 grid grid-cols-1 gap-6 pt-2">
        <RoomCard />
      </div>
      <div
        class="max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl lg:max-w-full"
      >
        <div class="md:flex">
          <div class="md:shrink">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src="https://fakeimg.pl/300"
              alt="Modern building architecture"
            />
          </div>
          <div class="p-8">
            <div class="text-sm font-semibold uppercase tracking-wide text-indigo-500">
              Company retreats
            </div>
            <a
              href="#"
              class="mt-1 block text-lg font-medium leading-tight text-black hover:underline"
              >Incredible accommodation for your team</a
            >
            <p class="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food and take in some
              sunshine? We have a list of places to do just that.
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
