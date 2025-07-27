import { useSubStore } from "~/stores/sub"
import type { Pinia } from 'pinia'
export default defineNuxtPlugin(async ({ $pinia }) => {
  // prepare ui json data
  const _pinia = $pinia as Pinia
  const subStore = useSubStore(_pinia)
  const { data: subscription } = await useAsyncData<Subscription>(
    'subscription',
    () => $fetch<Subscription>('/json/subscription.json')
  )
  if (subscription.value)  {
    subStore.setJsonSub(subscription.value)
  }
})
