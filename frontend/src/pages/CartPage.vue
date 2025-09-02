<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-green-700 mb-4">Your Cart</h1>

    <div v-if="cart.length === 0" class="text-gray-500">
      Your cart is empty.
    </div>

    <div v-else>
      <div 
        v-for="item in cart" 
        :key="item.id" 
        class="flex justify-between items-center border-b py-3"
      >
        <div>
          <h2 class="font-semibold">{{ item.name }}</h2>
          <p>KES {{ item.price }} x {{ item.quantity }}</p>
        </div>
        <button 
          class="text-red-600 hover:underline"
          @click="removeFromCart(item.id)"
        >
          Remove
        </button>
      </div>

      <div class="mt-6 font-bold">
        Total: KES {{ total }}
      </div>

      <button 
        class="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        @click="checkout"
      >
        Checkout
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const cart = ref<CartItem[]>([
  { id: 1, name: "Milk", price: 100, quantity: 2 },
  { id: 2, name: "Eggs", price: 350, quantity: 1 },
]);

const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

function removeFromCart(id: number) {
  cart.value = cart.value.filter(item => item.id !== id);
}

function checkout() {
  alert("Proceeding to checkout...");
}
</script>
