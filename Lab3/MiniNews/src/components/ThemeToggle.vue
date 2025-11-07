<template>
  <button
    class="button is-small is-rounded"
    :class="isDark ? 'is-dark' : 'is-light'"
    @click="toggleTheme"
  >
    <span v-if="isDark">🌙 Темна</span>
    <span v-else>☀️ Світла</span>
  </button>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

const isDark = ref(false);

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.classList.add('dark-theme');
  }
});

watch(isDark, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

function toggleTheme() {
  isDark.value = !isDark.value;
}
</script>

<style scoped>
.button {
  font-weight: 600;
}
</style>
