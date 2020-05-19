<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="24">Workspace Details</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">Workspace Details</el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Dashboard',
  created() {
    if (!this.$store.getters.hasWorkspace) {
      this.$router.replace({ name: 'Welcome' })
    }
  }
}
</script>
