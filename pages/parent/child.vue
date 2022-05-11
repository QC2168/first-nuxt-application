<template>
  <div>
    this is child components
  </div>
</template>
<script setup>
definePageMeta({
  key: route => route.fullPath
})
</script>