<template>
    <div>
        <a @click="navigate">to index</a>
    </div>
</template>

<script setup lang="ts">
function navigate(){
    return navigateTo({
        path:'/index',
        query:{
            'some-key':'value'
        }
    })
}
</script>