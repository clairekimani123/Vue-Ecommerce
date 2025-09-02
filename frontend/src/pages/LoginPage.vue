<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../store/auth";



const email = ref("");
const password = ref("");
const role = ref("customer");
const auth = useAuthStore();

const handleLogin = async () => {
  await auth.login(email.value, password.value, role.value as "customer" | "supplier");
  alert("Login successful!");
};
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Login</h2>
    <select v-model="role" class="border p-2 mb-3 w-full">
      <option value="customer">Customer</option>
      <option value="supplier">Supplier</option>
    </select>
    <input v-model="email" type="email" placeholder="Email" class="border p-2 w-full mb-3" />
    <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-3" />
    <button @click="handleLogin" class="bg-green-600 text-white px-4 py-2 rounded">Login</button>
  </div>
</template>
