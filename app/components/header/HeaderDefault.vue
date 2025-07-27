<script setup lang="ts">
import type { BreadcrumbItem } from '@nuxt/ui'
const route = useRoute()
console.log(route);

// const items = ref<BreadcrumbItem[]>()
const items = computed<BreadcrumbItem[]>(() => {
  const init = [
    {
      label: 'Home',
      icon: 'i-lucide-house',
      to: '/'
    }
  ] as BreadcrumbItem
  if (route.fullPath !== '/') {
    init.push({
      label: route.meta.breadcrumb.title as string,
      icon: 'i-lucide-edit'
    })
    init.push({
      label: route.params.slug as string,
      icon: ''
    })
  }
  return init
  
})
</script>

<template>
  <div class="bg-gray-800 w-full fixed top-0 left-0 z-50 py-3 px-4">
    <UBreadcrumb :items="items" />
  </div>
</template>
