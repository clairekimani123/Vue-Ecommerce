<script setup lang="ts">
import { ref } from "vue";
import api from "@/services/api";

const name = ref("");
const price = ref(0);
const successMessage = ref("");
const errorMessage = ref("");

const submitProduct = async () => {
  try {
    await api.post("/products", { name: name.value, price: price.value });
    successMessage.value = "✅ Product added successfully!";
    errorMessage.value = "";
    name.value = "";
    price.value = 0;
  } catch (err) {
    successMessage.value = "";
    errorMessage.value = "❌ Failed to add product";
  }
};
</script>

<template>
  <div>
    <h2>Add Product</h2>
    <input v-model="name" placeholder="Product name" />
    <input v-model.number="price" type="number" placeholder="Price" />
    <button @click="submitProduct">Save</button>

    <p v-if="successMessage" class="text-green-600">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
  </div>
</template>
