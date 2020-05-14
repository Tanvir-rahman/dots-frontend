<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form" :model="formData" :rules="rules">
      <div class="header">
        <h2>{{ $t('login.header') }}</h2>
      </div>
      <el-form-item prop="username">
        <el-input v-model="formData.username" prefix-icon="el-icon-user" :placheholder="$t('login.username')" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input ref="password" v-model="formData.password" prefix-icon="el-icon-lock" :placheholder="$t('login.password')" show-password />
        <router-link class="forgot-password" to="">{{ $t('login.forgotPassword') }}</router-link>
      </el-form-item>
      <el-form-item>
        <span>{{ $t('login.noAccount') }}<br><router-link class="register" :to="{name: 'Register'}">{{ $t('register.register') }}</router-link></span>
        <h-button :loading="loading" type="primary" @click="login('loginForm')">{{ $t('login.login') }}</h-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: this.$t('general.requiredField'), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t('general.requiredField'), trigger: 'blur' }
        ]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    login() {
      this.$refs.loginForm.validate(isValid => {
        if (isValid) {
          this.loading = true
          this.$store.dispatch('user/login', this.formData)
            .then(() => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              this.loading = false
            })
            .catch((e) => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style scoped lang="scss">
  $bg: $heading-grey;
  $light_gray:$heading-grey;
  $cursor: #fff;

  .login-container {
    vertical-align: middle;
    min-height: 100%;
    width: 100%;

    .login-form {
      position: relative;
      width: 300px;
      max-width: 100%;
      padding: 160px 35px 0;
      margin: 0 auto;
      overflow: hidden;
    }

    .el-input {
      height: 47px;

      input {
        height: 47px;
      }
    }

    .header {
      margin-bottom: 40px;
      color: $primary-color;
    }

    .el-form-item {
      border-radius: 5px;
      color: $dark-body-grey;
      margin-bottom: 30px;

      .forgot-password {
        float: right;
        color: $light-body-grey;
      }

      .el-button {
        float: right;
        min-width: 30%;
        font-size: 1.2rem;
        display: flex;
        justify-content: center;
      }

      span {
        float: left;
        line-height: 20px;

        .register {
          float: left;
          color: $primary-color;
        }
      }
    }
  }
</style>
