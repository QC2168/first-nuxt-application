<template>
    <div class="">

    </div>
</template>
<script setup lang="ts">import { ResultType, SwiperItemType } from './types';


const swiperData = useState<SwiperItemType[]>('swiperData', () => [])
const getSwiperData = async () => {
    const { data } = await useAsyncData('swiperData', () => $fetch<ResultType<SwiperItemType[]>>('http://127.0.0.1:8009/home/swiper'))
    // 返回的是ref类型，需要通过.value获取真实的值
    swiperData.value = data.value.body
}

getSwiperData()


</script>
<style lang="less" scoped>
</style>
