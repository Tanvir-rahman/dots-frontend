<template>
  <div class="login-container">
    <el-card class="box-card">
      <lang-select class="lang-select" />
      <el-form ref="loginForm" :model="formData" :rules="rules">
        <el-form-item :label="$t('login.username')" prop="username">
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item :label="$t('login.password')" prop="password">
          <el-input v-model="formData.password" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">{{ $t('login.login') }}</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  name: 'Login',
  components: {
    LangSelect
  },
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: 'This field is required', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'This field is required', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .login-container {
    display: flex;
    justify-content: center;
    padding: 40px;

    .box-card {
      width: 600px;

      .lang-select {
        float: right;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }
    }
  }
</style>
