  <script setup lang="ts">
  import { defineProps } from 'vue'
  import { Error } from '../../types/Error'

  const props = defineProps<{
    errorMessage: string
    setErrorMessage: (error: Error) => void
  }>()

  function hideError() {
    props.setErrorMessage(Error.none)
  }
  </script>
<template>
  <div
    v-if="errorMessage"
    data-cy="ErrorNotification"
    :class="[
      'notification is-danger is-light has-text-weight-normal',
      { hidden: !errorMessage }
    ]"
  >
    <button
      data-cy="HideErrorButton"
      type="button"
      class="delete"
      @click="hideError"
    ></button>
    {{ errorMessage }}
  </div>
</template>

