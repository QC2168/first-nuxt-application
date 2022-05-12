<template>
    <div class=""></div>
</template>
<script setup lang="ts">
interface SwiperItemType {
    id: number;
    imgSrc: string;
    alt: string
}

interface ResultType<T> {
    body: T;
}

const data = () => {

}
const swiperData = useState<SwiperItemType[]>('swiperData', () => [])
const getSwiperData = async () => {
    const { pending, data } = await useLazyAsyncData('swiperData', () => $fetch<ResultType<SwiperItemType[]>>('http://127.0.0.1:8009/home/swiper'))
    console.log(pending);
    console.log(data);


}

getSwiperData()


</script>
<style lang="less" scoped>
</style>
