<template>
  <section>
    <div v-if="product">
      <h1>{{ product.name }}</h1>
      <p><strong>Бренд:</strong> {{ product.brand }}</p>
      <p><strong>Категорія:</strong> {{ product.category }}</p>
      <p><strong>Ціна:</strong> {{ product.price }} грн</p>
      <p>
        <strong>Статус:</strong>
        {{ product.inStock ? 'Є в наявності' : 'Немає в наявності' }}
      </p>

      <button @click="store.addItem(product)" :disabled="!product.inStock">
        Додати в кошик
      </button>
    </div>

    <p v-else>Товар не знайдено.</p>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/useCartStore'

const route = useRoute()
const store = useCartStore()

const productId = Number(route.params.id)

const product = computed(() =>
  store.products.find((item) => item.id === productId),
)
</script>

<style scoped>
button {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
}
</style>