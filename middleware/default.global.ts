export default defineNuxtRouteMiddleware((to, from) => {
    console.log("目标页面:"+to.path)
    console.log("请求的（原）页面:"+from.path)
  })