<template>
  <div class="user">
       访问auth中间件路由
  </div>
</template>
<script setup lang="ts">
definePageMeta({
    middleware: ['auth'],
})
</script>
<style lang="less" scoped>
</style>
