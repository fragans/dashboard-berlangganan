<script setup lang="ts">
const { data: subscription, status } = await useAsyncData<Subscription>(
  'subscription',
  () => $fetch<Subscription>('/json/subscription.json')
)

const items = [
  {
    slot: 'packages',
    label: 'Packages'
  },
  {
    slot: 'kdp',
    label: 'KDP'
  },
  {
    slot: 'kdpPartner',
    label: 'KDP Partner'
  }
]
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Dashboard Berlangganan</h1>
    <span>{{  status }}</span>
    <UTabs :items="items" class="w-full">
      <!-- eslint-disable-next-line vue/no-unused-vars -->
      <template #packages="{ item }">
        <template v-if="subscription?.packages">
          <CardPackage :packages="subscription.packages" />
        </template>
      </template>
      <template #kdp>
        <template v-if="subscription?.kdp">
          <CardKdp :kdp="subscription.kdp" />
        </template>
      </template>
      <template #kdpPartner>
        <template v-if="subscription?.kdpPartner">
          <CardKdpPartner :kdp-partner="subscription.kdpPartner" />
        </template>
      </template>
    </UTabs>
  </div>
</template>
