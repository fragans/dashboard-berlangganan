<template>
  <div v-if="sub">
    <component :is="cardName" :data="sub[$route.params.slug as string as keyof Subscription]"/>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  breadcrumb: {
    title: 'Edit',
    to: '/edit'
  }
})
const subStore = useSubStore()
const {sub} = storeToRefs(subStore)
const $route = useRoute()
const cardName = computed(()=> {
  const capped = capitalizeFirstLetter($route.params.slug as string)
  return defineAsyncComponent(() => import(`~/components/card/Card${capped}.vue`))
})
function capitalizeFirstLetter(str:string) : string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>

<style>

</style>