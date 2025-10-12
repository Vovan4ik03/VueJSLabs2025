import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import NotFound from '@/components/NotFound.vue'
import { isAuthenticated } from '@/store/auth'

// lazy-loaded admin children
const AdminLayout = () => import('@/views/admin/AdminLayout.vue')
const Dashboard = () => import('@/views/admin/Dashboard.vue')
const Users = () => import('@/views/admin/Users.vue')
const UserDetails = () => import('@/views/admin/UserDetails.vue')
const Reports = () => import('@/views/admin/Reports.vue')

const routes = [
  { path: '/', name: 'home', component: Home, meta: { public: true } },
  { path: '/login', name: 'login', component: Login, meta: { public: true } },
  { path: '/register', name: 'register', component: Register, meta: { public: true } },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      { path: 'dashboard', name: 'admin-dashboard', component: Dashboard },
      { path: 'users', name: 'admin-users', component: Users },
      { path: 'user/:id', name: 'admin-user', component: UserDetails, props: true },
      { path: 'reports', name: 'admin-reports', component: Reports }
    ]
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  const auth = isAuthenticated()
  if (to.meta.requiresAuth && !auth) {
    next('/login')
  } else if (to.meta.public && auth && (to.path === '/login' || to.path === '/register')) {
    next('/admin/dashboard')
  } else {
    next()
  }
})

export default router
