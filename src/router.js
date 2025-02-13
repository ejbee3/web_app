import { createRouter, createWebHistory } from 'vue-router'
import DetailsPage from './pages/DetailsPage.vue'
import App from './App.vue'

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/details/:id', // Dynamic route for details page
    component: DetailsPage,
    props: true, // Pass route params as props
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
