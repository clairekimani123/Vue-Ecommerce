<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "@/services/api";

const customers = ref<any[]>([]);
const products = ref<any[]>([]);
const order = ref({ customer_id: null, items: [] as any[] });
const successMessage = ref("");
const errorMessage = ref("");

onMounted(async () => {
  const resCustomers = await api.get("/customers");
  customers.value = resCustomers.data;

  const resProducts = await api.get("/products");
  products.value = resProducts.data;
});

const addItem = () => {
  order.value.items.push({ product_id: null, quantity: 1 });
};

const submitOrder = async () => {
  try {
    await api.post("/orders", order.value);
    successMessage.value = "✅ Order created successfully!";
    errorMessage.value = "";
    order.value = { customer_id: null, items: [] }; // reset
  } catch (err) {
    errorMessage.value = "❌ Failed to create order";
    successMessage.value = "";
  }
};
</script>

<template>
  <div>
    <h2>Create Order</h2>

    <label>Customer</label>
    <select v-model="order.customer_id">
      <option disabled value="">-- select customer --</option>
      <option v-for="c in customers" :key="c.id" :value="c.id">{{ c.name }}</option>
    </select>

    <div v-for="(item, index) in order.items" :key="index" class="mt-2">
      <select v-model="item.product_id">
        <option disabled value="">-- select product --</option>
        <option v-for="p in products" :key="p.id" :value="p.id">
          {{ p.name }} - ${{ p.price }}
        </option>
      </select>
      <input v-model.number="item.quantity" type="number" min="1" />
    </div>

    <button @click="addItem">+ Add Item</button>
    <button @click="submitOrder">Submit Order</button>

    <p v-if="successMessage" class="text-green-600">{{ successMessage }}</p>
    <p v-if="errorMessage" class="text-red-600">{{ errorMessage }}</p>
  </div>
</template>
