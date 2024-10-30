<!-- src/views/HomePage.vue -->
<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Товары</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="product in products" :key="product.id" class="border p-4 rounded">
          <h2 class="text-xl font-semibold">{{ product.name }}</h2>
          <p>Цена: {{ product.price }} ₽</p>
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
  
  export default {
    setup() {
      const cartStore = useCartStore();
      const products = [
        { id: 1, name: 'Товар 1', price: 1000 },
        { id: 2, name: 'Товар 2', price: 2000 },
        { id: 3, name: 'Товар 3', price: 3000 },
      ];
  
      const addToCart = (product) => {
        cartStore.addItem(product);
      };
  
      return { products, addToCart };
    },
  };
  </script>
  