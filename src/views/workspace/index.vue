<template>
  <div>

    <el-tabs tab-position="left">
      <el-tab-pane label="User">
        <workspace-settings />
      </el-tab-pane>
      <el-tab-pane label="People">People</el-tab-pane>
      <el-tab-pane label="Configutations">Configutations</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import WorkspaceSettings from './WorkspaceSettings/index'
export default {
  name: 'WorkspaceIndex',
  components: {
    WorkspaceSettings
  }
}
</script>
