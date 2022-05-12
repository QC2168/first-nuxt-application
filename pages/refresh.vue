<template>
    <div class="m-6">
        <div>
            <ul>
                <li v-for="item of list" :key="item.id">{{item.id}} - {{item.title}}</li>
            </ul>
        </div>
        <button class="mt-2" @click="update">请求new接口</button>
    </div>
</template>
<script setup lang="ts">
import { NewsType, ResultType } from './types';

const list = ref<NewsType[]>([])
const { data, refresh } = await useFetch<ResultType<NewsType[]>>(() => `http://127.0.0.1:8009/home/news`)
list.value = data.value.body

const update = () => {
    refresh()
}
</script>
<style lang="less" scoped>
</style>
