<template>
  <aside class="sidebar">
    <slot>
      <nav>
        <router-link to="/admin/dashboard">Dashboard</router-link><br/>
        <router-link to="/admin/users">Users</router-link><br/>
        <router-link to="/admin/reports">Reports</router-link>
      </nav>
    </slot>
  </aside>
</template>
<script>
export default {}
</script>
