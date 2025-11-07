<template>
  <div id="app">
    <header class="navbar is-light">
      <div class="container">
        <div class="navbar-brand">
          <router-link to="/" class="navbar-item has-text-weight-bold">
            📰 MiniNews
          </router-link>
        </div>

        <div class="navbar-menu">
          <div class="navbar-end">
            <router-link to="/" class="navbar-item" active-class="is-active">
              Головна
            </router-link>
            <router-link to="/about" class="navbar-item" active-class="is-active">
              Про Нас
            </router-link>
            <div class="navbar-item">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <Transition name="fade" mode="out-in">
        <RouterView />
      </Transition>
    </main>

    <footer class="footer has-text-centered">
      <p>© 2025 MiniNews | Всі права захищено</p>
    </footer>
  </div>
</template>

<script setup>
import ThemeToggle from './components/ThemeToggle.vue';
</script>

<style>
:root {
  --bg-color: #fff;
  --text-color: #222;
}

.dark-theme {
  --bg-color: #1e1e1e;
  --text-color: #f2f2f2;
}

body,
html {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.navbar,
.footer {
  background-color: var(--bg-color);
  transition: background-color 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
</style>
