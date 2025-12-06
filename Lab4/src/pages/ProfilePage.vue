<template>
  <section>
    <h2 class="page-title">{{ t('profile.title') }}</h2>

    <form class="form" @submit.prevent="onSubmit">
      
      <div class="form-group">
        <label for="name">{{ t('profile.name') }}</label>
        <input
          id="name"
          type="text"
          v-model="values.name"
          :class="{ 'input-error': errors.name }"
        />
        <p v-if="errors.name" class="error-text">
          {{ t(translateValidationKey(errors.name)) }}
        </p>
      </div>

      
      <div class="form-group">
        <label for="email">{{ t('profile.email') }}</label>
        <input
          id="email"
          type="email"
          v-model="values.email"
          :class="{ 'input-error': errors.email }"
        />
        <p v-if="errors.email" class="error-text">
          {{ t(translateValidationKey(errors.email)) }}
        </p>
      </div>
      
      <div class="form-group">
        <label for="address">{{ t('profile.address') }}</label>
        <input
          id="address"
          type="text"
          v-model="values.address"
          :class="{ 'input-error': errors.address }"
        />
        <p v-if="errors.address" class="error-text">
          {{ t(translateValidationKey(errors.address)) }}
        </p>
      </div>

      
      <div class="form-group">
        <label>{{ t('profile.phones') }}</label>

        <div
          v-for="(field, index) in fields"
          :key="field.key"
          class="phone-row"
        >
          <input
            type="tel"
            v-model="values.phones[index]"
            :class="{ 'input-error': phoneError(index) }"
            placeholder="+380..."
          />
          <button
            type="button"
            class="btn small danger"
            @click="remove(index)"
          >
            {{ t('profile.removePhone') }}
          </button>
          <p v-if="phoneError(index)" class="error-text">
            {{ t(translateValidationKey(phoneError(index))) }}
          </p>
        </div>

        <button
          type="button"
          class="btn small outline"
          @click="addPhone"
        >
          {{ t('profile.addPhone') }}
        </button>
      </div>

      
      <p v-if="serverError" class="error-text">
        {{ t('profile.serverError', { msg: serverError }) }}
      </p>

      <div class="form-actions">
        <button type="submit" class="btn primary">
          {{ t('profile.save') }}
        </button>
        <button type="button" class="btn outline" @click="onReset">
          {{ t('profile.reset') }}
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useForm, useFieldArray } from 'vee-validate'
import * as yup from 'yup'


const profileSchema = yup.object({
  name: yup.string().required('validation.nameRequired'),
  email: yup
    .string()
    .required('validation.emailRequired')
    .email('validation.emailInvalid'),
  address: yup.string().required('validation.addressRequired'),
  phones: yup
    .array()
    .of(
      yup
        .string()
        .required('validation.phoneRequired')
        .matches(/^\+?[0-9]{10,15}$/, 'validation.phoneInvalid')
    )
    .min(1, 'validation.phoneRequired')
})

const { t } = useI18n()


const {
  handleSubmit,
  resetForm,
  values,
  errors,
  setFieldError
} = useForm({
  validationSchema: profileSchema,
  initialValues: {
    name: '',
    email: '',
    address: '',
    phones: ['+380']
  }
})


const { fields, remove, push } = useFieldArray('phones')

const serverError = ref('')


function translateValidationKey(key) {
  if (!key) return ''
  return `validationMessages.${key.replace('validation.', '')}`
}


function phoneError(index) {
  return errors.value?.phones?.[index]
}


const onSubmit = handleSubmit((formValues) => {
  serverError.value = ''

  if (formValues.email === 'taken@example.com') {
    setFieldError('email', 'validation.emailInvalid')
    serverError.value = 'Email вже зайнятий'
    return
  }

  alert(JSON.stringify(formValues, null, 2))
})


function onReset() {
  resetForm()
  serverError.value = ''
}

function addPhone() {
  push('+380')
}
</script>
