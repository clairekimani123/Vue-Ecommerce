<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Products</h1>

    <form @submit.prevent="addProduct" class="space-y-4 mb-6">
      <input v-model="form.name" placeholder="Product Name" class="border p-2 w-full" />
      <input v-model="form.price" type="number" placeholder="Price" class="border p-2 w-full" />
      <input v-model="form.stock" type="number" placeholder="Stock" class="border p-2 w-full" />
      <button type="submit" class="bg-purple-600 text-white px-4 py-2 rounded">Add Product</button>
    </form>

    <table class="w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">ID</th>
          <th class="p-2">Name</th>
          <th class="p-2">Price</th>
          <th class="p-2">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="border-t">
          <td class="p-2">{{ product.id }}</td>
          <td class="p-2">{{ product.name }}</td>
          <td class="p-2">{{ product.price }}</td>
          <td class="p-2">{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref<any[]>([])
const form = ref({ name: '', price: '', stock: '' })

const fetchProducts = async () => {
  const { data } = await axios.get('/api/products')
  products.value = data
}

const addProduct = async () => {
  await axios.post('/api/products', form.value)
  fetchProducts()
  Object.keys(form.value).forEach(key => (form.value[key] = ''))
}

onMounted(fetchProducts)
</script>
