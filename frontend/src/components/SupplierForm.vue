<script setup lang="ts">
import { ref } from "vue";
import api from "@/services/api";

const name = ref("");
const contact = ref("");
const successMessage = ref("");
const errorMessage = ref("");

const submitSupplier = async () => {
  try {
    await api.post("/suppliers", {
      name: name.value,
      contact: contact.value,
    });
    successMessage.value = "✅ Supplier added successfully!";
    errorMessage.value = "";
    name.value = "";
    contact.value = "";
  } catch (err) {
    successMessage.value = "";
    errorMessage.value = "❌ Failed to add supplier";
  }
};
</script>

<template>
  <div>
    <h2>Add Supplier</h2>
    <input v-model="name" placeholder="Supplier name" />
    <input v-model="contact" placeholder="Contact info" />
    <button @click="submitSupplier">Save</button>

    <p v-if="successMessage" class="text-green-600">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
  </div>
</template>
