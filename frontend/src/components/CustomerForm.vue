<script setup lang="ts">
import { ref } from "vue";
import api from "@/services/api";

const name = ref("");
const email = ref("");
const phone = ref("");
const successMessage = ref("");
const errorMessage = ref("");

const submitCustomer = async () => {
  try {
    await api.post("/customers", {
      name: name.value,
      email: email.value,
      phone: phone.value,
    });
    successMessage.value = "✅ Customer added successfully!";
    errorMessage.value = "";
    name.value = "";
    email.value = "";
    phone.value = "";
  } catch (err) {
    successMessage.value = "";
    errorMessage.value = "❌ Failed to add customer";
  }
};
</script>

<template>
  <div>
    <h2>Add Customer</h2>
    <input v-model="name" placeholder="Customer name" />
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="phone" placeholder="Phone" />
    <button @click="submitCustomer">Save</button>

    <p v-if="successMessage" class="text-green-600">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
  </div>
</template>
