<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold text-green-700 mb-6">Dashboard</h1>

    <div v-if="role === 'customer'">
      <h2 class="text-xl font-semibold mb-4">Customer Dashboard</h2>
      <ul class="list-disc ml-6 text-gray-700">
        <li>View your orders</li>
        <li>Track deliveries</li>
        <li>Update your profile</li>
      </ul>
    </div>

    <div v-else-if="role === 'supplier'">
      <h2 class="text-xl font-semibold mb-4">Supplier Dashboard</h2>
      <ul class="list-disc ml-6 text-gray-700">
        <li>Manage products</li>
        <li>View customer orders</li>
        <li>Update inventory</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Later, you’ll fetch this from backend auth
const role = ref("customer"); // or "supplier"
</script>
