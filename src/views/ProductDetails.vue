<template>
    <div class="container mx-auto p-4">
      <button @click="$router.back()" class="mb-4 bg-gray-200 px-4 py-2 rounded">Назад</button>
      <div class="flex flex-col md:flex-row items-center">
        <!-- Изображение товара -->
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full md:w-1/2 h-auto object-cover rounded-md mb-4 md:mb-0 md:mr-4"
        />
        <div>
          <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>
          <p class="text-gray-700 mb-4">{{ product.description }}</p>
          <p class="text-lg font-semibold mb-4">Цена: {{ product.price }} ₽</p>
          <button
            @click="addToCart"
            class="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { products } from '../data/products';
  import { useCartStore } from '../stores/cart';
  
  export default {
    props: {
      id: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const cartStore = useCartStore();
  
      // Найти товар по id
      const product = products.find((p) => p.id === parseInt(props.id));
  
      const addToCart = () => {
        cartStore.addItem(product);
      };
  
      return { product, addToCart };
    },
  };
  </script>
  