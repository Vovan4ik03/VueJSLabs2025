<template>
  <AuthLayout>
    <template #title>Login</template>
    
    <form @submit.prevent="onSubmit">
      <BaseInput v-model="email" label="Email" placeholder="email"/>
      <PasswordInput v-model="password" label="Password" placeholder="password"/>
      <div style="margin-top:10px">
        <button class="button is-link is-rounded" type="submit">Login</button>
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
    return { email: '', password: '', error: '' }
  },
  methods: {
    onSubmit() {
      if (!this.email || !this.password) {
        this.error = 'Email and password required'
        setTimeout(() => (this.error = ''), 3000)
        return
      }
      const ok = login(this.email, this.password)
      if (ok) this.$router.push('/admin/dashboard')
      else { this.error = 'Login failed' }
    }
  }
}
</script>
