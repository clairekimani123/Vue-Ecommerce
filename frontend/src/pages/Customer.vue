<template>
  <div class="container">
    <h1>Customers</h1>

    <!-- Customer Form -->
    <form @submit.prevent="addCustomer" class="form">
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
      <div>
        <label>Password</label>
        <input v-model="form.password" type="password" required />
      </div>
      <div>
        <label>Confirm Password</label>
        <input v-model="form.password_confirmation" type="password" required />
      </div>

      <button type="submit">Add Customer</button>
    </form>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import api from "../services/api";

const customers = ref<any[]>([]);
const form = ref({
  name: "",
  email: "",
  phone: "",
  location: "",
  password: "",
  password_confirmation: "",
});

// fetch customers on load
onMounted(async () => {
  const res = await api.get("/customers");
  customers.value = res.data;
});

// add new customer
const addCustomer = async () => {
  try {
    const res = await api.post("/customers", form.value);
    customers.value.push(res.data); // update table instantly
    form.value = { name: "", email: "", phone: "", location: "", password: "", password_confirmation: "" };
  } catch (err) {
    console.error(err);
    alert("Failed to add customer");
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

form div {
  display: flex;
  flex-direction: column;
}

input {
  padding: 5px;
  font-size: 14px;
}

button {
  padding: 8px;
  background: #2d4a6d;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
