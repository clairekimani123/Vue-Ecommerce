<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Orders</h1>

    <form @submit.prevent="addOrder" class="space-y-4 mb-6">
      <select v-model="form.customer_id" class="border p-2 w-full">
        <option disabled value="">Select Customer</option>
        <option v-for="c in customers" :key="c.id" :value="c.id">{{ c.name }}</option>
      </select>

      <select v-model="form.product_id" class="border p-2 w-full">
        <option disabled value="">Select Product</option>
        <option v-for="p in products" :key="p.id" :value="p.id">{{ p.name }}</option>
      </select>

      <input v-model="form.quantity" type="number" placeholder="Quantity" class="border p-2 w-full" />
      <button type="submit" class="bg-red-600 text-white px-4 py-2 rounded">Add Order</button>
    </form>

    <table class="w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">ID</th>
          <th class="p-2">Customer</th>
          <th class="p-2">Product</th>
          <th class="p-2">Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orders" :key="order.id" class="border-t">
          <td class="p-2">{{ order.id }}</td>
          <td class="p-2">{{ order.customer?.name }}</td>
          <td class="p-2">{{ order.product?.name }}</td>
          <td class="p-2">{{ order.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const customers = ref<any[]>([])
const products = ref<any[]>([])
const orders = ref<any[]>([])

const form = ref({ customer_id: '', product_id: '', quantity: '' })

const fetchOrders = async () => {
  const { data } = await axios.get('/api/orders')
  orders.value = data
}

const fetchCustomers = async () => {
  const { data } = await axios.get('/api/customers')
  customers.value = data
}

const fetchProducts = async () => {
  const { data } = await axios.get('/api/products')
  products.value = data
}

const addOrder = async () => {
  await axios.post('/api/orders', form.value)
  fetchOrders()
  Object.keys(form.value).forEach(key => (form.value[key] = ''))
}

onMounted(() => {
  fetchOrders()
  fetchCustomers()
  fetchProducts()
})
</script>
