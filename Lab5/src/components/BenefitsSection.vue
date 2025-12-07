<template>
  <section class="benefits">
    <h2>Переваги</h2>

    <div class="grid grid-3">
      <Card
        v-for="b in benefits"
        :key="b.title"
        class="card-hover"
      >
        <template #title>{{ b.title }}</template>

        <template #content>
          <p>{{ b.text }}</p>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import Card from "primevue/card";

const benefits = [
  { title: "Автоматизація", text: "Зменшує рутину та підвищує продуктивність." },
  { title: "Аналітика", text: "Глибокі звіти допомагають приймати рішення." },
  { title: "Командна робота", text: "Колаборація у режимі реального часу." }
];
</script>

<style scoped>
</style>
