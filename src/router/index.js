import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import TimelinePage from '../views/TimelinePage.vue' // Komponen baru
import CharacterPage from '../views/CharacterPage.vue' // Komponen baru

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/jejak-mereka', // Route untuk halaman timeline lengkap
      name: 'timeline',
      component: TimelinePage,
    },
    {
      path: '/karakter/:id', // Route dinamis untuk detail karakter (contoh: /karakter/galib)
      name: 'character-detail',
      component: CharacterPage,
      props: true, // Penting! Agar :id bisa diakses sebagai prop di CharacterDetailPage
    },
    // Optional: Route untuk daftar karakter jika mau ada page /karakter dulu
    // {
    //   path: '/karakter',
    //   name: 'characters',
    //   component: CharacterListPage // Komponen baru untuk daftar karakter
    // }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
