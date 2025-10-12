<template>
  <section class="home">
    <div class="container">
      <h1 class="title">Welcome to the Admin Panel Demo</h1>
      <p class="subtitle">
        This is a simple Vue 3 + Router app with authentication simulation.
      </p>

      <div class="buttons">
        <router-link to="/login" class="button is-link">Login</router-link>
        <router-link to="/register" class="button is-primary">Register</router-link>
      </div>
    </div>
  </section>
</template>



<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #f9fafb, #eef2ff);
  text-align: center;
}

.container {
  max-width: 600px;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  margin-bottom: 1.5rem;
  color: #4a5568;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.button {
  font-weight: bold;
}
</style>
