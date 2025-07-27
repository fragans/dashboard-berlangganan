<template>
  <div>
    <h3 class="text-lg text-center font-medium capitalize">
      Subs.json <span>{{ status }}</span>
    </h3>
    
    <UCard v-if="subscription">
      <UAccordion v-if="subscription" :items="Object.keys(subscription).map(subKey => ({ label: subKey, slot: subKey }))">
        <template v-for="subKey in Object.keys(subscription)" :key="subKey" #[subKey]>
          <div class="max-h-[20vw]">
            <pre class="bg-gray-800 rounded">{{ subscription[subKey as keyof Subscription] }}</pre>
          </div>
          <div class="flex justify-end p-3">
            <UButton :to="`/edit/${subKey}`" color="warning">
              edit
            </UButton>
          </div>
        </template>
      </UAccordion>
    </UCard>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  breadcrumb: {
    title: 'Home',
    to: '/'
  }
})
const { data: subscription, status } = await useAsyncData<Subscription>(
  'subscription',
  () => $fetch<Subscription>('/json/subscription.json')
)

</script>

<style>

</style>