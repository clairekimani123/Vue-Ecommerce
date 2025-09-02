<template>
  <div class="flex justify-center items-center h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <h1 class="text-xl font-bold text-green-700 mb-4">Register</h1>

      <form @submit.prevent="register">
        <input 
          v-model="form.name" 
          type="text" 
          placeholder="Full Name" 
          class="w-full mb-3 p-2 border rounded"
        />
        <input 
          v-model="form.email" 
          type="email" 
          placeholder="Email" 
          class="w-full mb-3 p-2 border rounded"
        />
        <input 
          v-model="form.password" 
          type="password" 
          placeholder="Password" 
          class="w-full mb-3 p-2 border rounded"
        />

        <select v-model="form.role" class="w-full mb-3 p-2 border rounded">
          <option value="customer">Customer</option>
          <option value="supplier">Supplier</option>
        </select>

        <button 
          type="submit" 
          class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  password: "",
  role: "customer",
});

function register() {
  alert(`Registered as ${form.role}: ${form.name}`);
  // Later: send data to backend with axios
}
</script>
