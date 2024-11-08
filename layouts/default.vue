<script setup lang="ts"></script>

<template>
  <header class="m-20 rounded-3xl border-2 border-slate-900 p-3">這是預設的 Header</header>
  <div>
    Layout: default
    <slot />
  </div>
  <footer class="m-20 rounded-3xl border-2 border-slate-900 p-3">這是預設的 footer</footer>
</template>

<style scoped></style>
