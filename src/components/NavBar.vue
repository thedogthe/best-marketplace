<!-- src/components/NavBar.vue -->
<template>
  <nav class="bg-blue-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold">Helium</router-link>
      <router-link to="/cart" class="text-lg">
        Корзина ({{ cartCount }})
      </router-link>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from '../stores/cart'; // Импортируем store
import { computed } from 'vue'; // Импортируем computed

export default {
  setup() {
    const cartStore = useCartStore(); // Создаем экземпляр store

    // Возвращаем реактивные данные
    return {
      cartCount: computed(() => cartStore.cartCount), // Оборачиваем cartCount в computed
    };
  },
};
</script>
