<template>
  <el-row type="flex" justify="center">
    <el-col>
      <h2>{{ $t('thankYou.title') }}</h2>
      <p>{{ $t('thankYou.description') }}</p>
      <el-button type="primary" @click="goToLogin">{{ $t('thankYou.logIn') }}</el-button>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ThankYou',
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped lang="scss">
.el-row {
  padding-top: 10%;

  .el-button {
    margin-top: 20px;
  }
}
</style>
