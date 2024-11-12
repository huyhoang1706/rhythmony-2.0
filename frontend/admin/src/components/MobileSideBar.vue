<template>
  <Transition name="slide-in" appear>
    <div v-if="isOpen" class="absolute top-50 left-0 z-30 md:hidden bg-neutral-900 w-3/4">
      <nav class="px-10 py-3 w-full h-screen border-r border-neutral-700">
        <ul class="flex flex-col gap-3 text-neutral-600">
          <li>
            <RouterLink
              to="/"
              class="flex items-center p-2 rounded w-full"
              activeClass="bg-neutral-800 text-white"
            >
              <span><v-icon name="md-dashboard-sharp" scale="1.5" /></span>
              <span class="text-lg ml-3">Dashboard</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/songs"
              class="flex items-center p-2 rounded w-full"
              activeClass="bg-neutral-800 text-white"
            >
              <span><v-icon name="bi-list" scale="1.5" /></span>
              <span class="text-lg ml-3">Songs</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/artists"
              class="flex items-center p-2 rounded w-full"
              activeClass="bg-neutral-800 text-white"
            >
              <span><v-icon name="bi-person-fill" scale="1.5" /></span>
              <span class="text-lg ml-3">Artist</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/albums"
              class="flex items-center p-2 rounded w-full"
              activeClass="bg-neutral-800 text-white"
            >
              <span><v-icon name="md-album" scale="1.5" /></span>
              <span class="text-lg ml-3">Album</span>
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/upload"
              class="flex items-center p-2 rounded w-full"
              activeClass="bg-neutral-800 text-white"
            >
              <span><v-icon name="md-uploadfile" scale="1.5" /></span>
              <span class="text-lg ml-3">Upload</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useContextStore } from '@/stores/context'
import { computed } from 'vue'

const context = useContextStore()

const isOpen = computed(() => {
  return context.isMobileMenuOpen
})
</script>

<style scoped>
/* Transition for sliding effect */
.slide-in-enter-active,
.slide-in-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.slide-in-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-in-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-in-leave-from {
  transform: translateX(0);
  opacity: 1;
}

.slide-in-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
