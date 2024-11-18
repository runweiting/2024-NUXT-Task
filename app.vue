<template>
  <div class="mx-20 my-5">
    <p class="text-stone-500">這是最外層的 app.vue</p>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
