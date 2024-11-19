<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <main class="container">
    <div class="h-auto rounded-3xl">
      <p class="text-xl text-stone-500">這是 register 頁</p>
      <p class="pt-2 font-elf text-3xl font-bold text-stone-500">Page: ㄓㄜˋㄕˋㄔㄢˇㄆㄧㄣˇㄧㄝˋ</p>
      <p class="pt-2 font-elf text-2xl text-stone-400">
        ㄇㄨˋㄑㄧㄢˊㄌㄨˋㄧㄡˊㄉㄜ˙ㄌㄨˋㄐㄧㄥˋㄨㄟˊ route.fullPath: {{ route.fullPath }}
      </p>
      <div class="max-w-md">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">姓名</span>
            <input
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="請輸入姓名"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              type="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john@example.com"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">When is your event?</span>
            <input
              type="date"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label class="block">
            <span class="text-gray-700">What type of event is it?</span>
            <select
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>Corporate event</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Other</option>
            </select>
          </label>
          <label class="block">
            <span class="text-gray-700">Additional details</span>
            <textarea
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              rows="3"
            ></textarea>
          </label>
          <div class="block">
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="checkbox"
                    class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 focus:ring-offset-0"
                  />
                  <span class="ml-2">Email me news and special offers</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
