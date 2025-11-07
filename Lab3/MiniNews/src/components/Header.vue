<template>
  <nav class="navbar is-light">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <strong>MiniNews</strong>
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link to="/" class="navbar-item" active-class="is-active">Головна</router-link>
        <router-link to="/about" class="navbar-item" active-class="is-active">Про нас</router-link>
      </div>
    </div>
  </nav>
</template>
