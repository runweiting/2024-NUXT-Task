<script setup lang="ts">
const route = useRoute()
// 獲取當前請求的事件
const event = useRequestEvent()
// 設定 HTTP 404 狀態碼
// event 可能是 undefined，所以得先檢查 event 是否存在
if (event) {
  setResponseStatus(event, 404)
}
// slug 參數可能是 string 或 string[]
const pathParams = computed(() => {
  const { slug } = route.params
  return Array.isArray(slug) ? slug.join('/') : slug
})
</script>

<template>
  <section class="container bg-stone-900">
    <div class="items-center text-white">
      <div class="flex flex-wrap items-center p-4">
        <div class="w-full p-4 text-center lg:w-1/2">
          <div class="text-[12rem] font-semibold">404</div>
        </div>
        <div class="w-full p-4 text-center lg:w-1/2 lg:text-left">
          <div class="mb-4 text-3xl font-medium">噢不！找不到這個頁面 😮</div>
          <div class="mb-8 text-lg">您所請求的頁面：{{ pathParams }}，不存在。</div>
          <NuxtLink to="/" class="btn">回首頁</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
