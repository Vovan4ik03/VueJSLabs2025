<template>
  <div class="column is-half">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="news.image" :alt="news.title">
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-5">{{ news.title }}</p>
        <p class="subtitle is-6">{{ news.date }}</p>
        <div class="content">{{ news.summary }}</div>
        <router-link :to="`/article/${news.id}`" class="button is-info mt-3">
          Читати далі
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ news: Object })
</script>

<style scoped>
.card {
  transition: transform 0.2s ease;
}
.card:hover {
  transform: scale(1.02);
}
</style>
