<template>
  <div class="container">
    <h1>Products</h1>

    <!-- Product Form -->
    <form @submit.prevent="addProduct" class="form">
      <div>
        <label>Name</label>
        <input v-model="form.name" type="text" required />
      </div>
      <div>
        <label>Price</label>
        <input v-model="form.price" type="number" step="0.01" required />
      </div>
      <div>
        <label>Quantity</label>
        <input v-model="form.quantity" type="number" required />
      </div>
      <div>
        <label>Supplier ID</label>
        <input v-model="form.supplier_id" type="number" required />
      </div>

      <button type="submit">Add Product</button>
    </form>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/services/api";

const products = ref<any[]>([]);
const form = ref({
  name: "",
  price: "",
  quantity: "",
  supplier_id: "",
});

onMounted(async () => {
  const res = await api.get("/products");
  products.value = res.data;
});

const addProduct = async () => {
  try {
    const res = await api.post("/products", form.value);
    products.value.push(res.data);
    form.value = { name: "", price: "", quantity: "", supplier_id: "" };
  } catch (err) {
    console.error(err);
    alert("Failed to add product");
  }
};
</script>

<style scoped>
@import "./FormTable.css";
</style>
