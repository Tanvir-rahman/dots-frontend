<template>
  <!--  <div class="navbar">-->
  <!--    <div class="right-menu">-->
  <!--      <el-dropdown-->
  <!--        class="avatar-container right-menu-item hover-effect"-->
  <!--        trigger="click"-->
  <!--      >-->
  <!--        <div class="avatar-wrapper">-->
  <!--          <el-avatar icon="el-icon-user-solid" />-->
  <!--          <i class="el-icon-caret-bottom" />-->
  <!--        </div>-->
  <!--        <el-dropdown-menu slot="dropdown">-->
  <!--          <router-link :to="{name: 'Profile'}">-->
  <!--            <el-dropdown-item>-->
  <!--              {{ $t('navbar.profile') }}-->
  <!--            </el-dropdown-item>-->
  <!--          </router-link>-->
  <!--          <el-dropdown-item-->
  <!--            divided-->
  <!--            @click.native="logout"-->
  <!--          >-->
  <!--            <span style="display:block;">-->
  <!--              {{ $t('navbar.logout') }}-->
  <!--            </span>-->
  <!--          </el-dropdown-item>-->
  <!--        </el-dropdown-menu>-->
  <!--      </el-dropdown>-->
  <!--    </div>-->
  <!--  </div>-->
  <top-nav class="navbar">
    <router-link :to="{name: 'Dashboard'}">
      <div class="brand">
        <img class="logo" src="@/assets/logo.png">
        <h1>Dots</h1>
      </div>
    </router-link>
    <div class="nav-menu">
      <router-link v-for="item in navItems" :key="item.name" :to="{name: item.name}">{{ item.label }}</router-link>
    </div>
    <div class="avatar-wrapper">
      <el-avatar shape="square" @click="showDrawer">TB</el-avatar>
    </div>
  </top-nav>
</template>

<script>

export default {
  name: 'Navbar',
  data: function() {
    return {
      navItems: [
        {
          name: 'Dashboard',
          label: this.$t('navbar.dashboard')
        },
        {
          name: 'Maps',
          label: this.$t('navbar.maps')
        },
        {
          name: 'Reports',
          label: this.$t('navbar.reports')
        },
        {
          name: 'Tables',
          label: this.$t('navbar.tables')
        }
      ]
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      await this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    showDrawer() {}
  }
}
</script>

<style scoped lang="scss">
  .navbar {
    height: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;

    .brand {
      display: flex;
      height: 100%;
      margin-right: auto;
      align-items: center;

      .logo {
        height: 32px;
      }

      h1 {
        margin-left: 20px;
        color: #33CCCC;
        font-family: "Lato", sans-serif;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;
      }
    }

    .nav-menu {
      margin-right: auto;
      font-family: "Lato", sans-serif;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      color: #666666;
      margin-left: 100px;

      a {
        text-decoration: none;
        margin-right: 75px;
      }
    }

    .avatar-wrapper {
      margin-left: auto;

      .el-avatar {
        background: rgba(255, 102, 51, 0.5);
        font-family: Lato, sans-serif;
        font-weight: bold;
        font-size: 18px;
        color: #333333;
        cursor: pointer;
      }
    }
  }
</style>
