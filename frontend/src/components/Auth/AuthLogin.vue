<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons-vue";

const email = ref("");
const password = ref("");
const role = ref("customer");
const showPassword = ref(false);

const auth = useAuthStore();

const handleLogin = async () => {
  try {
    await auth.login(email.value, password.value, role.value as "customer" | "supplier");
    alert("Login successful!");
  } catch (error) {
    alert("Login failed. Please check your credentials.");
  }
};
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Login</h2>

    <!-- Role Selector -->
    <select v-model="role" class="border p-2 mb-3 w-full rounded">
      <option value="customer">Customer</option>
      <option value="supplier">Supplier</option>
    </select>

    <!-- Email Input -->
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="border p-2 w-full mb-3 rounded"
    />

    <!-- Password Input with Toggle -->
    <div class="relative mb-3">
      <input
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        placeholder="Password"
        class="border p-2 w-full rounded"
      />
      <span
        class="absolute right-3 top-3 cursor-pointer text-gray-600"
        @click="showPassword = !showPassword"
      >
        <EyeOutlined v-if="!showPassword" />
        <EyeInvisibleOutlined v-else />
      </span>
    </div>

    <!-- Submit Button -->
    <button
      @click="handleLogin"
      class="bg-green-600 text-white px-4 py-2 rounded w-full"
    >
      Login
    </button>
  </div>
</template>
