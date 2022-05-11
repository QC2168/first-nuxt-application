<template>
    <div class="">
        <div>{{ route.params.group }}- {{ route.params.id }}</div>
        <p>{{ route.params.slug }}</p>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
<style lang="less" scoped>
</style>
