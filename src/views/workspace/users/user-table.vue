<template>
  <h-table :table-data="users" />
</template>
<script>
import { mapGetters } from 'vuex'
import { getWorkspaceUsers } from '@/api/workspace'

export default {
  name: 'UserTable',
  computed: {
    ...mapGetters('workspace', ['getDefaultWorkspace', 'getOtherWorkspaces'])
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      this.users = await getWorkspaceUsers(this.getDefaultWorkspace.id)
    }
  },
  data() {
    return {
      users: [

      ]
    }
  }
}
</script>
