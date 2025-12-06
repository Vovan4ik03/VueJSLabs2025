<template>
  <section>
    <h2 class="page-title">{{ t('cart.title') }}</h2>

    <div v-if="items.length === 0" class="alert">
      {{ t('cart.empty') }}
    </div>

    <div v-else class="cart">
      <table class="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>{{ t('products.title') }}</th>
            <th>Qty</th>
            <th>{{ t('products.price', { price: '' }) }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.qty }}</td>
            <td>{{ item.price * item.qty }}</td>
            <td>
              <button class="btn danger" @click="remove(item.id)">
                {{ t('cart.remove') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cart-summary">
        <p>
          {{ t('cart.totalCount', { count: totalCount }) }}
        </p>
        <p>
          {{ t('cart.totalPrice', { price: totalPrice }) }}
        </p>
        <button class="btn outline" @click="clear">
          {{ t('cart.clear') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useCartStore } from '../stores/card'

const { t } = useI18n()
const cartStore = useCartStore()

const { items, totalCount, totalPrice } = storeToRefs(cartStore)

function remove(id) {
  cartStore.remove(id)
}

function clear() {
  cartStore.clear()
}
</script>
