<template>

<div>
  <h1>Demo01</h1>
  <button class="text-red-300" @click="update">changeLUpdate layout</button>
<div class="box">
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
  <div class="child"></div>
</div>
</div>

</template>
<script lang="ts" setup>


const route = useRoute()
function update() {
  console.log('changeLayout');
  route.meta.layout = "other"
}
definePageMeta({
  layout: false,
});
</script>

<style>
.box{
display: flex;
flex-wrap: wrap;
width: 160px;
margin:20px;
}
.child{
  width: 50px;
  height: 50px;
  border: 1px solid gray;
}
</style>