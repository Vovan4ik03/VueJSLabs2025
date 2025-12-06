import { defineStore, storeToRefs } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalCount(state) {
      return state.items.reduce((sum, item) => sum + item.qty, 0)
    },
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
    }
  },
  actions: {
    add(product) {
      const existing = this.items.find((i) => i.id === product.id)
      if (existing) {
        existing.qty++
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1
        })
      }
    },
    remove(id) {
      this.items = this.items.filter((i) => i.id !== id)
    },
    clear() {
      this.items = []
    }
  },
  persist: {
    key: 'lab4-cart',
    paths: ['items']
  }
})

