<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Товары</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cart';
import ProductCard from '../components/ProductCard.vue';
import { products } from '../data/products'; // Импорт списка товаров

export default {
  components: {
    ProductCard,
  },
  setup() {
    const cartStore = useCartStore();

    const addToCart = (product) => {
      cartStore.addItem(product);
    };

    return { products, addToCart };
  },
};
</script>
