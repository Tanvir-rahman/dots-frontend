<template>
  <div class="welcome">
    <el-row>
      <el-col class="welcome-message">
        <span>{{ $t('workspace.welcome') }}, <span class="name">{{ firstName }}</span></span><br>
        <span>{{ $t('workspace.startByCreating') }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <h-button class="create-button" type="primary" @click="showCreateDrawer">{{ $t('workspace.createWorkspace') }}</h-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EventBus, TOGGLE_WORKSPACE_DRAWER } from '../../utils/bus'

export default {
  name: 'Welcome',
  data: function() {
    return {}
  },
  computed: {
    ...mapGetters(['name']),
    firstName: function() {
      const names = this.name.split(' ')
      return names[0]
    }
  },
  methods: {
    showCreateDrawer() {
      EventBus.$emit(TOGGLE_WORKSPACE_DRAWER)
    }
  }
}
</script>

<style scoped lang="scss">
  .welcome {
    padding-top: 10%;
    padding-left: 10%;

    .welcome-message {
      font-weight: bold;
      font-size: 60px;
      line-height: 85px;
      margin-bottom: 60px;
    }

    .name {
      color: $primary-color;
    }

    .create-button {
      font-size: 35px;
      line-height: 42px;
      border-radius: 40px;
    }
  }
</style>
