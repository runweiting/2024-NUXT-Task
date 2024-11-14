<script setup lang="ts">
interface ProductData {
  title: string
  description: string
  imageUrl: string
  altText: string
  price: number
  buttonText: string
  tags: string[]
}

const productCard = reactive<ProductData>({
  title: '這是 NUXT3 練習',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!',
  imageUrl: 'https://fakeimg.pl/300/',
  altText: 'fakeimg',
  price: 1000,
  buttonText: '立即預定',
  tags: ['photography', 'travel']
})
</script>

<template>
  <section class="max-w-sm overflow-hidden rounded shadow-lg">
    <ProductCardStackedImage :url="productCard.imageUrl" :alt-text="productCard.altText" />
    <ProductCardStackedContent
      :title="productCard.title"
      :description="productCard.description"
      :price="productCard.price"
      :button-text="productCard.buttonText"
    />
    <ProductCardStackedTags :tags="productCard.tags" />
  </section>
</template>

<style scoped></style>
