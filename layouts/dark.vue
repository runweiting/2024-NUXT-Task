<script setup lang="ts"></script>

<template>
  <LayoutHeader />
  <div class="mx-20 rounded-3xl border-2 border-stone-300 bg-stone-700 p-10">
    <p class="text-white">Layout: dark</p>
    <slot />
  </div>
  <LayoutFooter />
</template>

<style scoped></style>
