<template>
  <section class="problem">
    <h2>Проблема → Рішення</h2>

    <div class="grid grid-2">
      <Card class="card-hover">
        <template #title>Проблема</template>

        <template #content>
          <p>
            Задачі розкидані по месенджерах, таблицях і листах. Немає контролю,
            дедлайнів і прозорості.
          </p>
        </template>
      </Card>

      <Card class="card-hover">
        <template #title>Рішення</template>

        <template #content>
          <p>
            Єдина платформа для задач, командної роботи й аналітики. Усе в одному
            місці, без хаосу.
          </p>
        </template>
      </Card>
    </div>
  </section>
</template>

<script setup>
import Card from "primevue/card";
</script>