<template>
  <header class="mx-20 my-5 rounded-3xl border-2 border-stone-300 p-10 text-stone-500">
    <p class="mb-5">這是預設的 LayoutHeader</p>
    <nav class="flex space-x-4">
      <NuxtLink to="/" class="btn-active">首頁</NuxtLink>
      <NuxtLink to="/about" class="btn-active">關於</NuxtLink>
      <NuxtLink to="/rooms" class="btn-active">房型</NuxtLink>
      <NuxtLink to="/product" class="btn-active">產品</NuxtLink>
      <NuxtLink to="/admin" class="btn-active">後台首頁</NuxtLink>
      <NuxtLink to="/admin/order" class="btn-active">後台訂單頁</NuxtLink>
    </nav>
  </header>
</template>
