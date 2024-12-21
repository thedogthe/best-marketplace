// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CartPage from '../views/CartPage.vue';
import ProductDetails from '../views/ProductDetails.vue'; // Импорт компонента для деталей товара

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/cart', name: 'Cart', component: CartPage },
  { 
    path: '/product/:id', 
    name: 'ProductDetails', 
    component: ProductDetails, 
    props: true // Передача параметра id как prop
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
