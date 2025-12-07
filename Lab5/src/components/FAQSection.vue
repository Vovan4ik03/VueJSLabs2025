<template>
<section class="faq">
  <h2>FAQ</h2>

  <Accordion>
    <AccordionTab header="Чи є безкоштовна версія?">
      <p>Так, доступний Basic план.</p>
    </AccordionTab>

    <AccordionTab header="Чи можна додати команду?">
      <p>Так, у тарифі Team.</p>
    </AccordionTab>

    <AccordionTab header="Чи є мобільний застосунок?">
      <p>Ми працюємо над мобільною версією.</p>
    </AccordionTab>
  </Accordion>
</section>
</template>

<script setup>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
</script>