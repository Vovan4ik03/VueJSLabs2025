<template>
  <nav class="navbar">
    <router-link to="/profile" class="nav-link" active-class="nav-link--active">
      {{ t('nav.profile') }}
    </router-link>
    <router-link to="/products" class="nav-link" active-class="nav-link--active">
      {{ t('nav.products') }}
    </router-link>
    <router-link to="/cart" class="nav-link" active-class="nav-link--active">
      {{ t('nav.cart') }}
    </router-link>
  </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
