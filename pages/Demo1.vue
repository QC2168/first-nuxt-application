<template>
  <NuxtLayout>
    <h1>Demo01</h1>
    <div class="text-red-300" @click="changeCustomLayout">changeLayout</div>
  </NuxtLayout>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: "other",
});

const route = useRoute()
const changeCustomLayout = () => {
  console.log('changeLayout');

  route.meta.layout = "custom"
}
</script>