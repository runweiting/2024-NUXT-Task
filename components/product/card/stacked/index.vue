<script setup lang="ts">
interface ProductData {
  title: string
  price: number
  imageUrl: string
  altText: string
  buttonText: string
  description: string
  tags: string[]
}

const bannerData = reactive<ProductData>({
  title: '這是 NUXT3 練習',
  price: 1000,
  imageUrl: 'https://fakeimg.pl/300/',
  altText: 'fakeimg',
  buttonText: '立即預定',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
  tags: ['photography', 'travel']
})
</script>

<template>
  <section class="max-w-sm overflow-hidden rounded shadow-lg">
    <ProductCardStackedImage :url="bannerData.imageUrl" :alt-text="bannerData.altText" />
    <ProductCardStackedContent
      :title="bannerData.title"
      :description="bannerData.description"
      :price="bannerData.price"
      :button-text="bannerData.buttonText"
    />
    <ProductCardStackedTags :tags="bannerData.tags" />
  </section>
</template>

<style scoped></style>
