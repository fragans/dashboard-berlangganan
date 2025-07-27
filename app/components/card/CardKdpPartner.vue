<script lang="ts" setup>
const props = defineProps<{ kdpPartner: KdpPartner[] }>()
</script>

<template>
  <UCard>
    <div v-if="props.kdpPartner" class="flex flex-col gap-8">
      <UCard v-for="(item, key) in props.kdpPartner" :key="key">
        <template #header>
          <h3 class="text-lg text-center font-medium capitalize">
            {{ item.title }}
          </h3>
        </template>
        <div class="flex flex-col gap-4">
          <UFormField :label="`ID (${typeof item.id})`">
            <UInput v-model="item.id" type="number" />
          </UFormField>
          <UFormField :label="`Is Premium Plus (${typeof item.isPremiumPlus})`">
            <UCheckbox v-model="item.isPremiumPlus" />
          </UFormField>
          <UFormField :label="`Description (${typeof item.description})`">
            <UTextarea v-model="item.description" />
          </UFormField>
          <UFormField :label="`Code (${typeof item.code})`">
            <UInput v-model="item.code" />
          </UFormField>
          <UFormField :label="`Title (${typeof item.title})`">
            <UInput v-model="item.title" />
          </UFormField>
          <UFormField :label="`Image (${typeof item.image})`">
            <UInput v-model="item.image" />
          </UFormField>
          <UFormField :label="`Is Show (${typeof item.isShow})`">
            <UCheckbox v-model="item.isShow" />
          </UFormField>
          <UFormField :label="`Smallest Pkg Price (${typeof item.smallestPkgPrice})`">
            <UInput v-model="item.smallestPkgPrice" type="number" />
          </UFormField>
          <UFormField :label="`Smallest Pkg Period (${typeof item.smallestPkgPeriod})`">
            <UInput v-model="item.smallestPkgPeriod" type="number" />
          </UFormField>
          <UFormField :label="`Smallest Pkg Period Label (${typeof item.smallestPkgPeriodLabel})`">
            <UInput v-model="item.smallestPkgPeriodLabel" />
          </UFormField>

          <UCard>
            <template #header>
              <h3 class="text-lg text-center font-medium capitalize">
                Price
              </h3>
            </template>
            <UAccordion :items="item.price.map((priceItem: KdpPartnerPrice, index: number) => ({ label: `Price ${index + 1}`, slot: `price-${index}` }))">
              <template v-for="(priceItem, index) in item.price" :key="index" #[`price-${index}`]>
                <div class="flex flex-col gap-2 mt-2">
                  <UCard>
                    <div class="flex flex-col gap-2">
                      <template v-for="(priceValue, priceField) in priceItem" :key="priceField">
                        <UFormField :label="`${priceField} (${typeof priceValue})`">
                          <UInput
                            v-if="typeof priceValue !== 'boolean' && priceField !== 'productVariantPrice'"
                            v-model="(priceItem as any)[priceField]"
                            :type="typeof priceValue === 'number' ? 'number' : 'text'"
                          />
                          <UCheckbox
                            v-else-if="typeof priceValue === 'boolean'"
                            v-model="(priceItem as any)[priceField]"
                          />
                          <UTextarea
                            v-else-if="priceField === 'productVariantPrice'"
                            :model-value="JSON.stringify(priceValue)"
                            @update:model-value="(v) => (priceItem as any)[priceField] = JSON.parse(v)"
                          />
                        </UFormField>
                      </template>
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

<style>

</style>
