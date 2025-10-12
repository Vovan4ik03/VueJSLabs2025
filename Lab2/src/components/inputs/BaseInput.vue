<template>
  <div class="field">
    <label v-if="label">{{ label }}</label>
    <input
      :type="type"
      class="input"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: [String, Number], default: '' },
    label: String,
    placeholder: String,
    type: { type: String, default: 'text' }
  }
}
</script>
