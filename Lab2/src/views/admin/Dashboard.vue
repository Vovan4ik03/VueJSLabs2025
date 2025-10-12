<template>
  <div>
    <div class="tabs">
      <button @click="tab='Overview'">Overview</button>
      <button @click="tab='Activity'">Activity</button>
    </div>

    <KeepAlive :include="['Overview', 'Activity']" :max="2">
      <component :is="currentComponent" />
    </KeepAlive>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import Overview from './Overview.vue'
import Activity from './Activity.vue'

export default {
  components: { Overview, Activity },
  setup() {
    const tab = ref('Overview')
    const currentComponent = computed(() => (tab.value === 'Overview' ? 'Overview' : 'Activity'))
    return { tab, currentComponent }
  }
}
</script>
