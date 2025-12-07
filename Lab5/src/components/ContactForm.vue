<template>
  <section class="contact">
    <h2>Напишіть нам</h2>

    <Card class="contact-card">
      <template #content>
        <form @submit.prevent="submitForm">
          
          
          <div class="form-group">
            <label for="name">Ім’я *</label>
            <InputText
              id="name"
              v-model="name"
              :class="{ 'p-invalid': errors.name }"
            />
          </div>

          
          <div class="form-group">
            <label for="email">Email *</label>
            <InputText
              id="email"
              v-model="email"
              :class="{ 'p-invalid': errors.email }"
            />
          </div>

          
          <div class="form-group">
            <label for="phone">Телефон</label>
            <InputMask
              id="phone"
              mask="+38 (999) 999-99-99"
              v-model="phone"
              :class="{ 'p-invalid': errors.phone }"
            />
          </div>

          
          <div class="form-group">
            <label for="message">Повідомлення *</label>
            <Textarea
              id="message"
              v-model="message"
              autoResize
              rows="4"
              :class="{ 'p-invalid': errors.message }"
            />
          </div>

          
          <div class="checkbox-group" :class="{ 'invalid-checkbox': errors.agree }">
            <Checkbox
              v-model="agree"
              :binary="true"
              inputId="agree"
            />
            <label for="agree">Погоджуюсь з політикою конфіденційності *</label>
          </div>

          
          <Button label="Надіслати" type="submit" class="submit-btn" />

        </form>
      </template>
    </Card>
  </section>
</template>

<script setup>
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Checkbox from "primevue/checkbox";
import InputMask from "primevue/inputmask";
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const agree = ref(false);

const errors = ref({
  name: false,
  email: false,
  message: false,
  phone: false,
  agree: false
});

const validate = () => {
  errors.value.name = !name.value.trim();
  errors.value.email = !email.value.trim();
  errors.value.message = !message.value.trim();
  errors.value.agree = !agree.value;
  errors.value.phone = false;

  return !Object.values(errors.value).includes(true);
};

const submitForm = () => {
  if (!validate()) return;

  name.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
  agree.value = false;

  toast.add({
    severity: "success",
    summary: "Заявку надіслано!",
    detail: "Ми звʼяжемося з вами найближчим часом",
    life: 3000
  });
};
</script>

<style scoped>
.contact {
  text-align: center;
}

.contact-card {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}


.form-group {
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}


.checkbox-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
  text-align: left;
}

.invalid-checkbox .p-checkbox-box {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 1px #ef4444 inset !important;
}


.submit-btn {
  width: 100%;
  margin-top: 12px;
  border-radius: 8px;
  padding: 12px 0;
  font-size: 16px;
}


.p-inputmask.p-invalid .p-inputtext {
  border-color: #ef4444 !important;
  box-shadow: 0 0 0 1px #ef4444 inset !important;
}
</style>
