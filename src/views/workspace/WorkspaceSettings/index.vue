<template>
  <div>
    <el-row type="flex" justify="center" class="spacer">
      <el-col :span="24">
        <h2>Workspace Details</h2>
      </el-col>
    </el-row>
    <settings-form />

    <danger-zone />
  </div>
</template>

<script>
import settingsForm from './settingsForm'
import dangerZone from './danerZone'

export default {
  name: 'WorkspaceDetails',
  components: {
    settingsForm,
    dangerZone
  },
  data: function() {
    return {}
  }
}
</script>
<style >
</style>
