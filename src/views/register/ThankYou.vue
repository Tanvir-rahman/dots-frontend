<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
      <h2 class="title">{{ $t('thankYou.title') }}</h2>
      <p class="body-2-reg">{{ $t('thankYou.description') }}</p>
      <h-button type="primary" @click="goToLogin">{{ $t('thankYou.logIn') }}</h-button>
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

  .el-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    color: $primary-color
  }

  p {
    color: $dark-body-grey;
  }
}
</style>
