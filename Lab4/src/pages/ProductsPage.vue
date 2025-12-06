<template>
  <section>
    <h2 class="page-title">{{ t('products.title') }}</h2>

    <div class="cards-grid">
      <article
        v-for="product in products"
        :key="product.id"
        class="card"
      >
        <h3 class="card-title">
          {{ t(`productNames.${product.title}`) }}
        </h3>

        <p class="card-text">
          {{ t('products.price', { price: product.price }) }}
        </p>

        <button class="btn primary" @click="addToCart(product)">
          {{ t('products.addToCart') }}
        </button>
      </article>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/card' 

const { t } = useI18n()
const cartStore = useCartStore()

const products = [
  { id: 1, title: 'backpack', price: 1200 },
  { id: 2, title: 'laptopBag', price: 2000 },
  { id: 3, title: 'travelBag', price: 1500 }
]

function addToCart(product) {
  cartStore.add(product)
}
</script>
