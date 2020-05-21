<template>
  <div>
    <el-row type="flex" justify="center" class="spacer">
      <el-col :span="24">
        <h2>Workspace Details</h2>
      </el-col>
    </el-row>
    <settings-form :workspace="getDefaultWorkspace" />

    <danger-zone />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import settingsForm from './settingsForm'
import dangerZone from './danerZone'

export default {
  name: 'WorkspaceDetails',
  components: {
    settingsForm,
    dangerZone
  },
  computed: {
    ...mapGetters(['name', 'username']),
    ...mapGetters('workspace', ['getDefaultWorkspace', 'getOtherWorkspaces'])
  },
  data() {
    return {}
  }
}
</script>
<style >
</style>
