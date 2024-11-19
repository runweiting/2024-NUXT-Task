<script setup lang="ts">
const { $loadingState } = useNuxtApp()
</script>

<template>
  <div
    :class="[
      $loadingState ? 'visible scale-150 opacity-100' : 'invisible scale-125 opacity-0',
      'fixed left-0 top-0 z-[999999] flex h-screen w-screen items-center justify-center bg-black/35 backdrop-blur-sm transition-all duration-200'
    ]"
  >
    <span class="loader"></span>
  </div>
</template>

<style scoped>
/* From Uiverse.io by mobinkakei */
.loader {
  position: relative;
  width: 108px;
  display: flex;
  justify-content: space-between;
}
.loader::after,
.loader::before {
  content: '';
  display: inline-block;
  width: 48px;
  height: 48px;
  background-color: #fff;
  background-image: radial-gradient(circle 14px, #0d161b 100%, transparent 0);
  background-repeat: no-repeat;
  border-radius: 50%;
  animation:
    eyeMove 3s infinite,
    blink 10s infinite;
}
@keyframes eyeMove {
  0%,
  10% {
    background-position: 0px 0px;
  }
  13%,
  40% {
    background-position: -15px 0px;
  }
  43%,
  70% {
    background-position: 15px 0px;
  }
  73%,
  90% {
    background-position: 0px 15px;
  }
  93%,
  100% {
    background-position: 0px 0px;
  }
}
@keyframes blink {
  0%,
  10%,
  12%,
  20%,
  22%,
  40%,
  42%,
  60%,
  62%,
  70%,
  72%,
  90%,
  92%,
  98%,
  100% {
    height: 48px;
  }
  11%,
  21%,
  41%,
  61%,
  71%,
  91%,
  99% {
    height: 18px;
  }
}
</style>
