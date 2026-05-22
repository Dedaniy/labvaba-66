<template>
  <section>
    <h1>Кошик</h1>

    <p v-if="store.cart.length === 0">Кошик порожній.</p>

    <div v-else>
      <ul>
        <li v-for="item in store.cart" :key="item.id">
          {{ item.name }} — {{ item.price }} грн
          <button @click="store.removeItem(item.id)">Видалити</button>
        </li>
      </ul>

      <p><strong>Загальна сума:</strong> {{ store.totalPrice }} грн</p>

      <button class="clear-btn" @click="store.clearCart()">
        Очистити кошик
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/useCartStore'

const store = useCartStore()
</script>

<style scoped>
ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

li {
  margin-bottom: 12px;
}

button {
  margin-left: 12px;
  background: #e74c3c;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.clear-btn {
  margin-left: 0;
  margin-top: 10px;
  background: #2c3e50;
}
</style>