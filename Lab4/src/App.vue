<template>
  <div class="app">
    <header class="app-header">
      <div class="container header-inner">
        <h1 class="app-title">
        </h1>
        <LanguageSwitcher />
      </div>
      <NavBar />
    </header>

    <main class="app-main">
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import NavBar from './components/NavBar.vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { t } = useI18n()
</script>
