<template>
  <section>
    <h1>Каталог товарів</h1>

    <input v-model="search" type="text" placeholder="Пошук товару" />

    <select v-model="selectedCategory">
      <option value="all">Усі категорії</option>
      <option value="Ноутбуки">Ноутбуки</option>
      <option value="Смартфони">Смартфони</option>
      <option value="Аксесуари">Аксесуари</option>
    </select>

    <div class="grid">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :item="product"
        @add-to-cart="store.addItem"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { useCartStore } from '../stores/useCartStore'

const store = useCartStore()

const search = ref('')
const selectedCategory = ref('all')

const filteredProducts = computed(() => {
  return store.products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === 'all' ||
      product.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
input,
select {
  padding: 10px;
  margin-right: 12px;
  margin-bottom: 20px;
  border: 2px solid #2c3e50;
  border-radius: 8px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>