<template>
  <div class="card">
    <h3>{{ item.name }}</h3>
    <p><strong>Бренд:</strong> {{ item.brand }}</p>
    <p><strong>Категорія:</strong> {{ item.category }}</p>
    <p><strong>Ціна:</strong> {{ item.price }} грн</p>
    <p :class="{ stock: item.inStock, out: !item.inStock }">
      {{ item.inStock ? 'Є в наявності' : 'Немає в наявності' }}
    </p>

    <RouterLink :to="`/catalog/${item.id}`">Детальніше</RouterLink>
    <button @click="emit('add-to-cart', item)" :disabled="!item.inStock">
      Додати в кошик
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types'
import { RouterLink } from 'vue-router'

defineProps<{
  item: Product
}>()

const emit = defineEmits<{
  (e: 'add-to-cart', item: Product): void
}>()
</script>

<style scoped>
.card {
  background: white;
  border: 2px solid #e74c3c;
  border-radius: 12px;
  padding: 20px;
}

.card h3 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.card p {
  margin-bottom: 8px;
}

.card a {
  display: inline-block;
  margin-right: 12px;
  color: #2c3e50;
  font-weight: bold;
  text-decoration: none;
}

.card button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}

.card button:disabled {
  background: #999;
  cursor: not-allowed;
}

.stock {
  color: green;
}

.out {
  color: red;
}
</style>