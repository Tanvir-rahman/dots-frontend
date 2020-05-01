<template>
  <top-nav class="navbar">
    <router-link :to="{name: 'Dashboard'}">
      <div class="brand">
        <img class="logo" src="@/assets/logo.png">
        <h1>Dots</h1>
      </div>
    </router-link>
    <div class="nav-menu">
      <router-link v-for="item in navItems" :key="item.name" :to="{name: item.name}" class="body-bold">{{ item.label }}</router-link>
    </div>
    <div class="avatar-wrapper" @click="toggleDrawer">
      <el-avatar shape="square">{{ nameInitials }}</el-avatar>
    </div>
  </top-nav>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus, TOGGLE_DRAWER } from '@/utils/bus'

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
      ],
      showDrawer: false
    }
  },
  computed: {
    ...mapGetters(['name']),
    nameInitials: function() {
      let initials = ''
      const names = this.name.split(' ')
      for (const name of names) {
        initials += name.charAt(0).toUpperCase()
      }
      return initials
    }
  },
  methods: {
    toggleDrawer() {
      EventBus.$emit(TOGGLE_DRAWER)
    }
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
