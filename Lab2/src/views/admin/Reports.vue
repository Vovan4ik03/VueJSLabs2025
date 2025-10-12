<template>
  <div class="content">
    <h3>Reports</h3>
    <ReportsTable :reports="reports">
      <template #row="{ item }">
        <td>{{ item.id }}</td>
        <td><strong>{{ item.title.toUpperCase() }}</strong></td>
      </template>
    </ReportsTable>
  </div>
</template>

<script>
import ReportsTable from '@/components/reports/ReportsTable.vue'
import { fetchReports } from '@/api/mock'

export default {
  components: { ReportsTable },
  data() { return { reports: [] } },
  async created() { this.reports = await fetchReports() }
}
</script>
