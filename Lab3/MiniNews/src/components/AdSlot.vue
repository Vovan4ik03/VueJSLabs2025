<template>
  <div class="notification is-warning has-text-centered" @click="$emit('showModal')">
    Реклама — натисни, щоб побачити!
  </div>
</template>

<style scoped>
.notification {
  cursor: pointer;
  transition: background-color 0.3s;
}
.notification:hover {
  background-color: #ffdd57;
}
</style>
