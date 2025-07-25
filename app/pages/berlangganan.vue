<script setup lang="ts">
import type { Subscription } from '~/types/packages'

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
      <template #kdpPartner="{ item }">
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">
              {{ item.label }}
            </h2>
          </template>
          <div v-if="subscription && subscription.kdpPartner" class="space-y-4">
            <div v-for="(partner, index) in subscription.kdpPartner" :key="index">
              <h3 class="text-lg font-medium">
                Partner {{ index + 1 }}
              </h3>
              <pre>{{ partner }}</pre>
            </div>
          </div>
          <template #footer>
            <UButton color="primary">
              Save Changes
            </UButton>
          </template>
        </UCard>
      </template>
    </UTabs>
  </div>
</template>
