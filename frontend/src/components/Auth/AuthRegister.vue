<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/store/auth";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons-vue";

const firstname = ref("");
const lastname = ref("");
const email = ref("");
const password = ref("");
const role = ref("customer");
const showPassword = ref(false);

const auth = useAuthStore();

const handleRegister = async () => {
  try {
    await auth.register({
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password: password.value,
      role: role.value,
    });
    alert("Registration successful!");
  } catch (error) {
    alert("Registration failed. Please try again.");
  }
};
</script>

<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold mb-4">Register</h2>

    <!-- Role Selector -->
    <select v-model="role" class="border p-2 mb-3 w-full rounded">
      <option value="customer">Customer</option>
      <option value="supplier">Supplier</option>
    </select>

    <!-- First Name -->
    <input
      v-model="firstname"
      type="text"
      placeholder="First Name"
      class="border p-2 w-full mb-3 rounded"
    />

    <!-- Last Name -->
    <input
      v-model="lastname"
      type="text"
      placeholder="Last Name"
      class="border p-2 w-full mb-3 rounded"
    />

    <!-- Email -->
    <input
      v-model="email"
      type="email"
      placeholder="Email"
      class="border p-2 w-full mb-3 rounded"
    />

    <!-- Password with Toggle -->
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

    <!-- Submit -->
    <button
      @click="handleRegister"
      class="bg-blue-600 text-white px-4 py-2 rounded w-full"
    >
      Register
    </button>
  </div>
</template>
