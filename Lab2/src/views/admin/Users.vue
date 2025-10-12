<template>
  <div class="content">
    <h3>Users</h3>
    <ul>
      <li v-for="u in users" :key="u.id"><router-link :to="`/admin/user/${u.id}`">{{ u.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import { fetchUsers } from '@/api/mock'

export default {
  data() { return { users: [] } },
  async created() { this.users = await fetchUsers() }
}
</script>
