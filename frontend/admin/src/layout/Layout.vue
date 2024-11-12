<template>
  <div class="flex h-screen">
    <SideBar />
    <ScrollPanel class="w-full relative">
      <Header />
      <MobileSideBar />
      <slot />
    </ScrollPanel>
  </div>
</template>

<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import ScrollPanel from 'primevue/scrollpanel'
import MobileSideBar from '@/components/MobileSideBar.vue'
</script>
