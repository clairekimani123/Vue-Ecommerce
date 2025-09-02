<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/customers">Customers</router-link>
      <router-link to="/suppliers">Suppliers</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/orders">Orders</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #2c3e50;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.navbar a.router-link-exact-active {
  text-decoration: underline;
}
</style>
