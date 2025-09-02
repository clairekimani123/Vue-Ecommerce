<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Suppliers</h1>

    <form @submit.prevent="addSupplier" class="space-y-4 mb-6">
      <input v-model="form.name" placeholder="Name" class="border p-2 w-full" />
      <input v-model="form.email" placeholder="Email" class="border p-2 w-full" />
      <input v-model="form.phone" placeholder="Phone" class="border p-2 w-full" />
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">Add Supplier</button>
    </form>

    <table class="w-full border">
      <thead>
        <tr class="bg-gray-200">
          <th class="p-2">ID</th>
          <th class="p-2">Name</th>
          <th class="p-2">Email</th>
          <th class="p-2">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="supplier in suppliers" :key="supplier.id" class="border-t">
          <td class="p-2">{{ supplier.id }}</td>
          <td class="p-2">{{ supplier.name }}</td>
          <td class="p-2">{{ supplier.email }}</td>
          <td class="p-2">{{ supplier.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const suppliers = ref<any[]>([])
const form = ref({ name: '', email: '', phone: '' })

const fetchSuppliers = async () => {
  const { data } = await axios.get('/api/suppliers')
  suppliers.value = data
}

const addSupplier = async () => {
  await axios.post('/api/supplier/register', form.value)
  fetchSuppliers()
  Object.keys(form.value).forEach(key => (form.value[key] = ''))
}

onMounted(fetchSuppliers)
</script>
