<template>
  <header class="mx-20 my-5 rounded-3xl border-2 border-stone-300 p-10 text-stone-500">
    <p class="mb-5">這是預設的 LayoutHeader</p>
    <div class="flex space-x-2">
      <NuxtLink to="/" class="btn">首頁</NuxtLink>
      <NuxtLink to="/about" class="btn">關於</NuxtLink>
      <NuxtLink to="/admin" class="btn">後台首頁</NuxtLink>
      <NuxtLink to="/admin/order" class="btn">後台訂單頁</NuxtLink>
    </div>
  </header>
</template>
