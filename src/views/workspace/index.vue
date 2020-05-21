<template>
  <div>
    <el-tabs tab-position="left" active-name="first">
      <el-tab-pane label="Workspace Settings" disabled />
      <el-tab-pane label="Workspace 1" disabled />
      <el-tab-pane label="Details" name="first">
        <workspace-settings />
      </el-tab-pane>
      <el-tab-pane label="People" name="second">People</el-tab-pane>
      <el-tab-pane label="Configurations" name="third">Configurations</el-tab-pane>
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
