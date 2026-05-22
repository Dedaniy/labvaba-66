import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '../types'

export const useCartStore = defineStore('cart', () => {
  const products = ref<Product[]>([
    {
      id: 1,
      name: 'Ноутбук Acer Aspire',
      price: 22999,
      category: 'Ноутбуки',
      inStock: true,
      brand: 'Acer',
    },
    {
      id: 2,
      name: 'Samsung Galaxy A15',
      price: 8999,
      category: 'Смартфони',
      inStock: true,
      brand: 'Samsung',
    },
    {
      id: 3,
      name: 'Навушники TWS',
      price: 1499,
      category: 'Аксесуари',
      inStock: true,
      brand: 'Xiaomi',
    },
    {
      id: 4,
      name: 'Power Bank 20000 mAh',
      price: 1199,
      category: 'Аксесуари',
      inStock: false,
      brand: 'Baseus',
    },
    {
      id: 5,
      name: 'ASUS VivoBook',
      price: 26999,
      category: 'Ноутбуки',
      inStock: true,
      brand: 'ASUS',
    },
    {
      id: 6,
      name: 'Xiaomi Redmi Note',
      price: 9999,
      category: 'Смартфони',
      inStock: true,
      brand: 'Xiaomi',
    },
  ])

  const cart = ref<Product[]>([])

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + item.price, 0),
  )

  function addItem(product: Product) {
    cart.value.push(product)
  }

  function removeItem(id: number) {
    cart.value = cart.value.filter((item) => item.id !== id)
  }

  function clearCart() {
    cart.value = []
  }

  return {
    products,
    cart,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
  }
})