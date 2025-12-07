<template>
  <header class="header">
    <h2>ManagerHelp</h2>

    <Button
      label="Скопіювати промокод"
      icon="pi pi-copy"
      @click="copyPromo"
    />
  </header>
</template>

<script setup>
import Button from "primevue/button";
import { inject } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();


const copy = inject("copy");

const copyPromo = async () => {
  const ok = await copy("PROMO2025");
  if (ok) {
    toast.add({
      severity: "success",
      summary: "Промокод скопійовано!",
      life: 2000
    });
  }
};
</script>
