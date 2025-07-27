<template>
  <UCard>
    <div v-if="props.data" class="flex flex-col gap-8">
      <UCard v-for="(item, key) in props.data" :key="key">
        <template #header>
          <h3 class="text-lg text-center font-medium capitalize">
            {{ key }}
          </h3>
        </template>
        <div class="flex flex-col gap-4">
          <UFormField :label="`id (${typeof item.id})`">
            <UInput v-model="item.id" />
          </UFormField>
          <UFormField label="Title">
            <UInput v-model="item.title" />
          </UFormField>
          <UFormField label="Description">
            <UTextarea v-model="item.description" />
          </UFormField>
          <UFormField label="Image URL">
            <UInput v-model="item.image" />
          </UFormField>
          <UCard>
            <template #header>
              <h3 class="text-lg text-center font-medium capitalize">
                Price
              </h3>
            </template>
            <UAccordion v-if="item.price" :items="Object.keys(item.price).map(priceKey => ({ label: priceKey, slot: priceKey }))">
              <template v-for="priceKey in Object.keys(item.price)" :key="priceKey" #[priceKey]>
                <div class="flex flex-col gap-2 mt-2">
                  <UCard v-for="(priceItem, index) in item.price[priceKey as keyof typeof item.price]" :key="index">
                    <div class="flex flex-col gap-2">
                      <UFormField :label="`Normal Price (${typeof priceItem.normalPrice})`">
                        <UInput v-model="priceItem.normalPrice" type="number" />
                      </UFormField>
                      <UFormField :label="`Discount Price (${typeof priceItem.discPrice})`">
                        <UInput v-model="priceItem.discPrice" type="number" />
                      </UFormField>
                      <UFormField :label="`Discount (${typeof priceItem.disc})`">
                        <UInput v-model="priceItem.disc" type="number" />
                      </UFormField>
                      <UFormField label="Link">
                        <UInput v-model="priceItem.link" />
                      </UFormField>
                      <UFormField label="Format Name">
                        <UInput v-model="priceItem.formatName" />
                      </UFormField>
                      <UFormField label="ID">
                        <UInput v-model="priceItem.id" />
                      </UFormField>
                      <UFormField label="Membership ID">
                        <UInput v-model="priceItem.membershipId" />
                      </UFormField>
                      <UFormField :label="`Position (${typeof priceItem.position})`">
                        <UInput v-model="priceItem.position" type="number" />
                      </UFormField>
                      <UFormField label="Post Name">
                        <UInput v-model="priceItem.postName" />
                      </UFormField>
                      <UFormField :label="`Duration (${typeof priceItem.duration})`">
                        <UInput v-model="priceItem.duration" type="number" />
                      </UFormField>
                    </div>
                  </UCard>
                </div>
              </template>
            </UAccordion>
          </UCard>
        </div>
      </UCard>
    </div>
    <template #footer>
      <div class="pb-3 flex justify-end">
        <UButton color="primary">
          Save Changes
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
const props = defineProps<{ data: Subscription['packages'] }>()
</script>

<style>

</style>
