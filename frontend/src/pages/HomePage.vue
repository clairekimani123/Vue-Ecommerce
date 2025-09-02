<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-green-700 mb-4">Welcome to Inventory App</h1>
    <p class="text-gray-600 mb-6">Browse products from our suppliers and order with ease.</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div 
        v-for="product in products" 
        :key="product.id" 
        class="border rounded-lg p-4 shadow hover:shadow-lg transition"
      >
        <h2 class="font-semibold">{{ product.name }}</h2>
        <p class="text-sm text-gray-500">{{ product.description }}</p>
        <p class="font-bold mt-2">KES {{ product.price }}</p>
        <button 
          class="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          @click="addToCart(product)"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const products = ref<Product[]>([
  { id: 1, name: "Milk", description: "Fresh farm milk", price: 100 },
  { id: 2, name: "Eggs", description: "Organic eggs", price: 350 },
  { id: 3, name: "Chicken", description: "Free-range chicken", price: 800 },
]);

function addToCart(product: Product) {
  alert(`Added ${product.name} to cart!`);
}
</script>
