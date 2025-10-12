<template>
  <AuthLayout>
    <template #title>Register</template>
    <form @submit.prevent="onSubmit">
      <BaseInput v-model="name" label="Name" />
      <BaseInput v-model="email" label="Email" />
      <PasswordInput v-model="password" label="Password" />
      <PasswordInput v-model="confirmPassword" label="Confirm" />
      <div style="margin-top:10px">
        <button class="button is-link is-rounded" type="submit">Register</button>
      </div>
      <p v-if="error" style="color:red">{{ error }}</p>
    </form>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/layout/AuthLayout.vue'
import BaseInput from '@/components/inputs/BaseInput.vue'
import PasswordInput from '@/components/inputs/PasswordInput.vue'
import { login } from '@/store/auth'

export default {
  components: { AuthLayout, BaseInput, PasswordInput },
  data() {
    return { name: '', email: '', password: '', confirmPassword: '', error: '' }
  },
  methods: {
    onSubmit() {
      if (!this.name || !this.email || !this.password) {
        this.error = 'All fields required'
        setTimeout(() => (this.error = ''), 3000)
        return
      }
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match'
        setTimeout(() => (this.error = ''), 3000)
        return
      }

      login(this.email, this.password, this.name)
      this.$router.push('/admin/dashboard')
    }
  }
}
</script>
