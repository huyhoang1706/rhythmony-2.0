import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/songs',
      name: 'songs',
      component: () => import('@/views/SongView.vue'),
    },
    {
      path: '/artists',
      name: 'artists',
      component: () => import('@/views/ArtistView.vue'),
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('@/views/AlbumView.vue'),
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('@/views/UploadView.vue'),
    },
  ],
})

export default router
