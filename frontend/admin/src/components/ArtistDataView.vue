<template>
  <DataView class="my-6" :value="artists" data-key="id" unstyled>
    <template #list="slotProps">
      <div class="flex flex-col rounded-lg overflow-hidden bg-neutral-900">
        <div
          v-for="(item, index) in slotProps.items"
          :key="index"
          class="flex items-center justify-between py-3 px-4"
        >
          <div class="flex items-center gap-5">
            <div class="relative aspect-square w-16">
              <img class="max-w-full h-auto rounded-full" :src="item.image" :alt="item.name" />
            </div>
            <div class="flex flex-col gap-1">
              <h5 class="text-lg font-bold">{{ item.name }}</h5>
              <span class="font-light text-sm text-neutral-400">Artist</span>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <Button
              severity="secondary"
              style="padding: 4px !important; background-color: inherit; border: none"
            >
              <v-icon name="ri-edit-box-line" />
            </Button>
            <Button unstyled class="p-1">
              <v-icon name="md-delete-round" class="text-red-500" />
            </Button>
          </div>
        </div>
      </div>
    </template>
  </DataView>
</template>

<script setup lang="ts">
import { DataView, Button } from 'primevue'
import type { Artist } from '@/services/types/type'

defineProps<{
  artists: Artist[]
}>()
</script>
