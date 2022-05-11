<template>
  <div>
    <NuxtLayout name="default">
      <NuxtLink class="text-blue-500" to="/demo1">to Demo1.vue (NuxtLink)</NuxtLink>
      <h1>Index page</h1>
    </NuxtLayout>
  </div>
</template>
<script setup>
definePageMeta({
  title: 'My home page'
})
const route = useRoute()
console.log(route);
</script>