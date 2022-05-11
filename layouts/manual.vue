<template>
    <div>
        <div class="w-screen h-20 flex items-center justify-center">
            <slot name="header" />
        </div>
        <div class="container mx-auto">
            <slot name="main" />
        </div>
        <div class="w-screen h-20 flex items-center justify-center">
            <slot name="footer" />
        </div>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="less" scoped>
</style>
