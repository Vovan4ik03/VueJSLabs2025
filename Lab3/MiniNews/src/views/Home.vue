<template>
  <section class="section">
    <h1 class="title">Останні новини</h1>
    <div class="columns is-multiline">
      <NewsCard v-for="n in news" :key="n.id" :news="n" />
    </div>
    <AdSlot />
  </section>
</template>

<script setup>
import { news } from '../data/news'
import NewsCard from '../components/NewCard.vue'
import AdSlot from '../components/AdSlot.vue'
</script>

<style scoped>
.section {
  padding-top: 3rem;
}
</style>
