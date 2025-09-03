<template>
  <div class="container">
    <h1>Suppliers</h1>

    <!-- Supplier Form -->
    <form @submit.prevent="addSupplier" class="form">
      <div>
        <label>Name</label>
        <input v-model="form.name" type="text" required />
      </div>
      <div>
        <label>Email</label>
        <input v-model="form.email" type="email" required />
      </div>
      <div>
        <label>Phone</label>
        <input v-model="form.phone" type="text" required />
      </div>
      <div>
        <label>Location</label>
        <input v-model="form.location" type="text" required />
      </div>

      <button type="submit">Add Supplier</button>
    </form>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/services/api";

const suppliers = ref<any[]>([]);
const form = ref({
  name: "",
  email: "",
  phone: "",
  location: "",
});

onMounted(async () => {
  const res = await api.get("/suppliers");
  suppliers.value = res.data;
});

const addSupplier = async () => {
  try {
    const res = await api.post("/suppliers", form.value);
    suppliers.value.push(res.data);
    form.value = { name: "", email: "", phone: "", location: "" };
  } catch (err) {
    console.error(err);
    alert("Failed to add supplier");
  }
};
</script>

<style scoped>
@import "./FormTable.css";
</style>
