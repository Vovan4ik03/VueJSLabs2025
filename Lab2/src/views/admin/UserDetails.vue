<template>
  <div class="content">
    <h3>User details</h3>
    <div v-if="user">
      <p><b>ID:</b> {{ user.id }}</p>
      <p><b>Name:</b> {{ user.name }}</p>
      <p><b>Email:</b> {{ user.email }}</p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { fetchUserById } from '@/api/mock'

export default {
  props: ['id'],
  data() { return { user: null } },
  async created() { this.user = await fetchUserById(this.$route.params.id) }
}
</script>
