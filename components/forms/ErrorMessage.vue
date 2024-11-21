<script setup lang="ts">
withDefaults(
  defineProps<{
    msg?: string | null
  }>(),
  {
    msg: null
  }
)
</script>

<template>
  <span v-if="msg" class="text-sm text-red-500">{{ msg }}</span>
</template>

<style scoped></style>
