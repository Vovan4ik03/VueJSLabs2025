<template>
  <section class="section has-text-centered">
    <div class="container">
      <h1 class="title is-1 has-text-danger">404</h1>
      <h2 class="subtitle">Сторінку не знайдено</h2>
      <p class="mb-4">Схоже, ви потрапили не туди.</p>

      <router-link to="/" class="button is-link">
        Повернутись на головну
      </router-link>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.section {
  padding-top: 5rem;
}
.title {
  font-size: 6rem;
}
.button {
  margin-top: 1rem;
}
</style>
