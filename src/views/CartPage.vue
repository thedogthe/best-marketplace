<!-- src/views/CartPage.vue -->
<template>
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-bold mb-4">Корзина</h1>
      <div v-if="cartItems.length > 0">
        <div v-for="(item, index) in cartItems" :key="index" class="border p-4 rounded mb-2">
          <h2 class="text-xl font-semibold">{{ item.name }}</h2>
          <p>Цена: {{ item.price }} ₽</p>
          <button
            @click="removeItem(index)"
            class="mt-2 bg-red-500 text-white px-4 py-2 rounded"
          >
            Удалить
          </button>
        </div>
        <p class="text-lg font-bold mt-4">Итого: {{ totalPrice }} ₽</p>
        <button @click="clearCart" class="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Очистить корзину
        </button>
      </div>
      <p v-else>Корзина пуста</p>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cart';
  
  export default {
    setup() {
      const cartStore = useCartStore();
      const { items: cartItems, totalPrice, removeItem, clearCart } = cartStore;
  
      return { cartItems, totalPrice, removeItem, clearCart };
    },
  };
  </script>
  