<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Товары</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Используем компонент ProductCard для отображения каждого товара -->
      <div v-for="product in products" :key="product.id" class="border p-4 rounded shadow">
        <ProductCard :product="product" />
        <!-- Кнопка "Добавить в корзину" -->
        <button
          @click="addToCart(product)"
          class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import ProductCard from '../components/ProductCard.vue'; // Импортируем компонент карточки товара
import { products } from '../data/products'; // Импортируем данные товаров

export default {
  components: {
    ProductCard, // Регистрируем компонент карточки товара
  },
  setup() {
    const cartStore = useCartStore();

    const addToCart = (product) => {
      cartStore.addItem(product); // Добавляем товар в корзину через store
    };

    return { products, addToCart };
  },
};
</script>
