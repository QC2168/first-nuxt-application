<template>
  <div>
    <NuxtLayout name="default">
      <NuxtLink class="text-blue-500" to="/demo1">to Demo1.vue (NuxtLink)</NuxtLink>
      <h1>Index page</h1>
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const route =useRoute()
definePageMeta({
  title: 'My home page'
})

useHead({
  titleTemplate: 'My App - %s',
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  title:route.meta.title,
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
})
</script>