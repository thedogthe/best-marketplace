<template>
    <div
      @click="goToDetails"
      class="border p-4 rounded shadow hover:shadow-lg transition-shadow cursor-pointer"
    >
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
      <p class="text-gray-500 mb-4">Цена: {{ product.price }} ₽</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const goToDetails = () => {
        window.location.href = `/product/${props.product.id}`; // Переход по маршруту
      };
  
      return { goToDetails };
    },
  };
  </script>
  