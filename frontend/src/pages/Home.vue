<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <h1>📦 Inventory Management</h1>
      <p class="tagline">Welcome to the Inventory App!</p>
      <p class="description">
        Manage your products, customers, suppliers, and orders all in one place.
        Stay organized and keep your business running smoothly 🚀
      </p>
     
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="card">
        <h2>👥 Customers</h2>
        <p>Track and manage customer information efficiently.</p>
      </div>
      <div class="card">
        <h2>🏢 Suppliers</h2>
        <p>Keep supplier details handy for smooth operations.</p>
      </div>
      <div class="card">
        <h2>📑 Orders</h2>
        <p>Monitor and process customer orders with ease.</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Logic can be added later for fetching stats
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
.hero {
  margin-bottom: 3rem;
}
.hero h1 {
  font-size: 2.5rem;
  color: #2c3e50;
}
.tagline {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #555;
}
.description {
  max-width: 600px;
  margin: 0.5rem auto 1.5rem;
  color: #666;
}
.cta {
  background: #3498db;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.cta:hover {
  background: #2980b9;
}
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}
.card:hover {
  transform: translateY(-5px);
}
.card h2 {
  margin-bottom: 0.5rem;
  color: #2c3e50;
}
.card p {
  color: #666;
}
</style>
