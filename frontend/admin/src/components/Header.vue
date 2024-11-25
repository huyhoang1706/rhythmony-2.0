<template>
  <header class="sticky top-0 left-0 border-b border-neutral-700 z-30">
    <div class="p-4 flex justify-between items-center">
      <div class="flex items-center">
        <button @click="context.toggleMobileMenu" class="md:hidden">
          <v-icon name="hi-menu" scale="1.5" />
        </button>
        <!-- <Breadcrumb></Breadcrumb> -->
      </div>

      <div class="flex items-center">
        <span class="text-neutral-200 mr-3">Admin</span>
        <Avatar label="A" shape="circle" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import Breadcrumb from 'primevue/breadcrumb'
import { Avatar } from 'primevue'
import { useContextStore } from '@/stores/context'

const context = useContextStore()
</script>
