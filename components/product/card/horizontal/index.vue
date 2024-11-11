<script setup lang="ts"></script>

<template>
  <section class="w-full max-w-sm lg:flex lg:max-w-full">
    <div
      class="h-48 flex-none overflow-hidden rounded-t bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
      style="background-image: url('https://fakeimg.pl/300/')"
      title="Woman holding a mug"
    ></div>
    <div
      class="flex flex-col justify-between rounded-b border-b border-l border-r border-gray-400 bg-white p-4 leading-normal lg:rounded-b-none lg:rounded-r lg:border-l-0 lg:border-t lg:border-gray-400"
    >
      <div class="mb-8">
        <p class="flex items-center text-sm text-gray-600">
          <svg
            class="mr-2 h-3 w-3 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
            />
          </svg>
          Members only
        </p>
        <div class="mb-2 text-xl font-bold text-gray-900">
          Can coffee make you a better developer?
        </div>
        <p class="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div class="flex items-center">
        <img
          class="mr-4 h-10 w-10 rounded-full"
          src="https://fakeimg.pl/300/"
          alt="Avatar of Jonathan Reinink"
        />
        <div class="text-sm">
          <p class="leading-none text-gray-900">Jonathan Reinink</p>
          <p class="text-gray-600">Aug 18</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
