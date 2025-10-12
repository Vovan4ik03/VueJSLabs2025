<template>
  <table style="width:100%">
    <thead><tr><th>ID</th><th>Title</th></tr></thead>
    <tbody>
      <tr v-for="item in reports" :key="item.id">
        <slot name="row" :item="item">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
        </slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: { reports: { type: Array, default: () => [] } }
}
</script>
