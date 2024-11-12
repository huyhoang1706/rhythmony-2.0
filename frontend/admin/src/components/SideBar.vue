<template>
  <aside class="hidden md:block w-[calc(100%/5)] min-w-[200px] border-r border-neutral-700 p-4">
    <div class="text-center">
      <v-icon name="fa-spotify" scale="3" />
    </div>
    <div></div>
    <nav class="mt-3">
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
  </aside>
</template>

<script setup lang="ts"></script>
