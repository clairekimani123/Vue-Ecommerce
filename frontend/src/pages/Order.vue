<template>
  <div class="page">
    <!-- Left Table -->
    <div class="table-section">
      <h2>Orders</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.customer?.name }}</td>
            <td>{{ order.product?.name }}</td>
            <td>{{ order.quantity }}</td>
            <td>Ksh {{ order.product?.price * order.quantity }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4" style="text-align: right; font-weight: bold;">
              Grand Total:
            </td>
            <td style="font-weight: bold;">Ksh {{ grandTotal }}</td>
          </tr>
        </tfoot>
      </table>
    </div>

    <!-- Right Form -->
    <div class="form-section">
      <h2>Add Order</h2>
      <form @submit.prevent="addOrder" class="form">
        <div>
          <label>Customer</label>
          <select v-model="form.customer_id" required>
            <option disabled value="">-- Select Customer --</option>
            <option v-for="c in customers" :key="c.id" :value="c.id">
              {{ c.name }}
            </option>
          </select>
        </div>

        <div>
          <label>Product</label>
          <select v-model="form.product_id" required>
            <option disabled value="">-- Select Product --</option>
            <option v-for="p in products" :key="p.id" :value="p.id">
              {{ p.name }} (Ksh {{ p.price }})
            </option>
          </select>
        </div>

        <div>
          <label>Quantity</label>
          <input v-model="form.quantity" type="number" min="1" required />
        </div>

        <button type="submit">Add Order</button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import api from "@/services/api";

const customers = ref<any[]>([]);
const products = ref<any[]>([]);
const orders = ref<any[]>([]);

const form = ref({
  customer_id: "",
  product_id: "",
  quantity: "",
});

onMounted(async () => {
  await loadData();
});

async function loadData() {
  const resOrders = await api.get("/orders");
  orders.value = resOrders.data;

  const resCustomers = await api.get("/customers");
  customers.value = resCustomers.data;

  const resProducts = await api.get("/products");
  products.value = resProducts.data;
}

async function addOrder() {
  await api.post("/orders", form.value);
  form.value = { customer_id: "", product_id: "", quantity: "" };
  await loadData();
}

// ✅ Grand Total computed
const grandTotal = computed(() =>
  orders.value.reduce((sum, order) => {
    return sum + (order.product?.price || 0) * order.quantity;
  }, 0)
);
</script>

<style scoped>
.page {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
}

.table-section {
  flex: 2;
}

.form-section {
  flex: 1;
  max-width: 500px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.form div {
  display: flex;
  flex-direction: column;
}

input,
select {
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 10px 14px;
  background: #2d3748;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background: #4a5568;
}

table {
  width: 100%;
  max-width: 750px;
  border-collapse: collapse;
  margin-top: 10px;

}

th,
td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

tfoot td {
  border-top: 2px solid #000;
}
</style>
