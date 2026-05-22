<template>
  <div class="app">
    <header>
      <h1>Інтернет-магазин електроніки</h1>
    </header>

    <nav>
      <RouterLink to="/">Головна</RouterLink>
      <RouterLink to="/catalog">Каталог</RouterLink>
      <RouterLink to="/cart">Кошик ({{ cartCount }})</RouterLink>
    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/useCartStore'

const store = useCartStore()
const cartCount = computed(() => store.cart.length)
</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

header {
  background: #2c3e50;
  color: white;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 20px;
}

nav {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #e74c3c;
  font-weight: bold;
}

nav a.router-link-active {
  color: #2c3e50;
}
</style>