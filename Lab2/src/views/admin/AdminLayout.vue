<template>
  <div class="container" style="display:flex; gap:20px">
    <Sidebar>
    </Sidebar>

    <div style="flex:1">
      <div style="display:flex; justify-content:space-between; align-items:center">
        <h2>Admin Panel</h2>
        <div>
          <span v-if="user">Hello, {{ user.name }}</span>
          <button @click="doLogout">Logout</button>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/layout/Sidebar.vue'
import { getUser, logout } from '@/store/auth'
import { provide } from 'vue'

export default {
  components: { Sidebar },
  setup() {
    const user = getUser()
    provide('authUser', user)
    function doLogout() {
      logout()
      window.location.href = '/login'
    }
    return { user, doLogout }
  }
}
</script>
