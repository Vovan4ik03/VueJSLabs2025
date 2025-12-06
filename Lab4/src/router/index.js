import { createRouter, createWebHistory } from 'vue-router'
import ProfilePage from '../pages/ProfilePage.vue'
import CartPage from '../pages/CartPage.vue'
import ProductsPage from '../pages/ProductsPage.vue'

const routes = [
  { path: '/', redirect: '/profile' },
  { path: '/profile', component: ProfilePage, name: 'profile' },
  { path: '/cart', component: CartPage, name: 'cart' },
  { path: '/products', component: ProductsPage, name: 'products' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})