<template>
  <div id="app">
    <header class="navbar is-link">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item has-text-weight-bold">
          Admin Panel Demo
        </router-link>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item" active-class="is-active">Home</router-link>
          <router-link to="/login" class="navbar-item" active-class="is-active">Login</router-link>
          <router-link to="/register" class="navbar-item" active-class="is-active">Register</router-link>
          <router-link to="/admin" class="navbar-item" active-class="is-active">Admin</router-link>
        </div>
      </div>
    </header>

    <main class="section">
      <router-view />
    </main>

    <footer class="footer has-text-centered">
      <p>© 2025 Admin Panel Demo</p>
    </footer>
  </div>
</template>