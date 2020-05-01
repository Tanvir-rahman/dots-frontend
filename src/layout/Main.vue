<template>
  <el-container direction="vertical">
    <Navbar />
    <el-main>
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
      <basic-drawer
        :visible.sync="showDrawer"
        direction="rtl"
        size="50%"
        :show-close="false"
        :with-header="false"
        custom-class="drawer"
      >
        <div class="header">
          <span class="username heading">{{ username }}</span>
          <span class="logout bold-body" @click="logout">{{ $t('navbar.logout') }}</span>
        </div>
      </basic-drawer>
    </el-main>
  </el-container>
</template>

<script>
import Navbar from './components/Navbar'
import { EventBus, TOGGLE_DRAWER } from '@/utils/bus'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: { Navbar },
  data: function() {
    return {
      showDrawer: false
    }
  },
  computed: {
    ...mapGetters(['username'])
  },
  created() {
    EventBus.$on(TOGGLE_DRAWER, () => {
      this.showDrawer = !this.showDrawer
    })
  },
  methods: {
    logout() {
      this.$confirm(this.$t('navbar.logoutConfirm')).then(async() => {
        await this.$store.dispatch('user/logout')
        await this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.drawer {
  .header {
    display: flex;
    margin-top: 45px;
    margin-right: 30px;
    margin-left: 30px;
    align-items: center;

    .logout {
      margin-left: auto;
      cursor: pointer;
    }
  }
}
</style>
