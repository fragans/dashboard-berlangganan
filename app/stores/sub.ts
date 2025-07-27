import { defineStore } from 'pinia'

export const useSubStore = defineStore('sub', {
  state: () => ({
    sub: null as Subscription | null
   }),
  actions: {
    setJsonSub(sub: Subscription) {
      this.sub = sub
    }
  }
})
