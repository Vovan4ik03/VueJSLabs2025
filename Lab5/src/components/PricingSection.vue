<template>
  <section class="pricing">
    <h2>Тарифи / Плани</h2>

    <div class="plans grid grid-3">
      <Card
        v-for="plan in plans"
        :key="plan.name"
        class="card-hover"
      >
        <template #title>
          {{ plan.name }}
        </template>

        <template #content>
          <p class="plan-desc">{{ plan.desc }}</p>

          <h3 class="plan-price">{{ plan.price }} грн/міс</h3>

          <ul class="plan-features">
            <li v-for="f in plan.features" :key="f">{{ f }}</li>
          </ul>

          <div class="plan-buttons">
            <Button label="Обрати план" />
            <Button
              label="Скопіювати ціну"
              icon="pi pi-copy"
              class="p-button-text"
              @click="copyPrice(plan)"
            />
          </div>
        </template>
      </Card>
    </div>

    <div class="calc">
      <h3>Міні-калькулятор</h3>

      <div class="calc__label">Кількість користувачів</div>
      <InputNumber v-model="users" :min="1" showButtons />

      <p style="margin-top: 14px;">
        Орієнтовна вартість: <b>{{ total }} грн/міс</b>
      </p>
    </div>
  </section>
</template>

<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import InputNumber from "primevue/inputnumber";
import { ref, computed, inject } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();
const copy = inject("copy");

const plans = [
  {
    name: "Basic",
    desc: "Для фрілансерів та невеликих груп.",
    price: 99,
    features: ["5 проектів", "3 учасники", "CSV експорт", "Базова аналітика"]
  },
  {
    name: "Team",
    desc: "Для команд, що активно працюють з задачами.",
    price: 199,
    features: ["20 проектів", "15 учасників", "Аналітика задач", "Підтримка"]
  },
  {
    name: "Pro",
    desc: "Для компаній, яким потрібна масштабованість.",
    price: 399,
    features: ["Необмежені проекти", "Необмежені учасники", "Інтеграції", "SLA"]
  }
];

const users = ref(1);
const basePrice = 100;
const total = computed(() => users.value * basePrice);

const copyPrice = async (plan) => {
  const ok = await copy(`${plan.name}: ${plan.price} грн/міс`);
  if (ok) {
    toast.add({
      severity: "success",
      summary: "Ціна скопійована!",
      life: 2500
    });
  }
};
</script>

<style scoped>
.plan-desc {
  margin: 6px 0 10px;
  font-size: 14px;
  color: #4b5563;
}

.plan-price {
  font-size: 22px;
  color: #2563eb;
  margin-bottom: 12px;
}

.plan-features {
  padding-left: 18px;
  margin-bottom: 14px;
}

.plan-buttons {
  display: flex;
  gap: 5px;
  margin-top: 10px;
}
</style>
