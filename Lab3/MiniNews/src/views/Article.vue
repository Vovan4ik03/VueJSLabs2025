<template>
  <section class="section">
    <div v-if="article" class="content">
      <h1 class="title">{{ article.title }}</h1>
      <p class="subtitle">{{ article.date }}</p>
      <figure class="image is-3by1">
        <img :src="article.image" :alt="article.title">
      </figure>
      <p>{{ article.content }}</p>
      <AdSlot @showModal="showModal = true" />
      <ModalAd v-if="showModal" @close="showModal = false" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { news } from '../data/news'
import AdSlot from '../components/AdSlot.vue'
import ModalAd from '../components/ModalAd.vue'

const route = useRoute()
const article = news.find(a => a.id === Number(route.params.id))
const showModal = ref(false)
</script>
