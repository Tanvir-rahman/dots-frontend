<template>
  <div class="table-details">
    <h3>{{ tableName }}</h3>
    <el-table
      v-loading.fullscreen.lock="loading"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="col in tableColumns"
        :key="col"
        fixed
        :prop="col"
        :label="col"
      />
    </el-table>
  </div>
</template>

<script>
import { tableActions } from '@/store/modules/tables'
import { mapGetters } from 'vuex'

export default {
  name: 'TableDetails',
  data: () => {
    return {
      loading: false
    }
  },
  computed: {
    ...mapGetters('tables', ['getTableDetails']),

    tableData() {
      return (this.getTableDetails.data && this.getTableDetails.data.data) || []
    },

    tableColumns() {
      return this.tableData.length && Object.keys(this.tableData[0])
    },

    tableName() {
      return this.getTableDetails.name
    }
  },

  created() {
    this.loading = true
    this.$store.dispatch(
      `tables/${tableActions.GET_TABLE_DETAILS}`,
      this.$route.params.tableUuid
    ).finally(() => {
      this.loading = false
    })
  },

  mounted() {
    this.$nextTick().then(() => {
      this.table = this.getAllTables
    })
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
.table-details {
}
</style>
