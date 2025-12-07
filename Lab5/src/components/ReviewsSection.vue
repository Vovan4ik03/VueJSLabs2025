<template>
  <section class="reviews">
    <h2>Відгуки</h2>

    <div class="grid grid-3">
      <Card
        v-for="r in reviews"
        :key="r.name"
        class="card-hover"
      >
        <template #title>
          {{ r.name }}
        </template>

        <template #content>
          <p class="review-role">{{ r.role }}</p>
          <p class="review-text">"{{ r.text }}"</p>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import Card from "primevue/card";

const reviews = [
  {
    name: "Андрій",
    role: "Project Manager",
    text: "Сервіс значно покращив організацію командної роботи."
  },
  {
    name: "Марина",
    role: "Маркетолог",
    text: "Нарешті бачу прогрес задач у реальному часі!"
  },
  {
    name: "Сергій",
    role: "CEO",
    text: "Зручний інструмент, який допоміг оптимізувати процеси."
  }
];
</script>

<style scoped>
.review-role {
  font-size: 14px;
  color: #31569f;
  margin-bottom: 6px;
}

</style>
