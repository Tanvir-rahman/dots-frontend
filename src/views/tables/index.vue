<template>
  <div class="table-list">

    <template>
      <div class="table-list__item-list">
        <div class="table-list__import-btn">
          <el-button type="primary" @click="showModal = true">{{ $t('tables.importLabel') }}</el-button>
        </div>

        <div class="table-list__table-cont">
          <el-table
            v-loading.fullscreen.lock="loading"
            :data="tables"
            highlight-current-row
            style="width: 100%"
          >
            <el-table-column property="name" :label="$t('tables.listTable.tableName')">
              <template slot-scope="scope">
                <router-link
                  :to="{
                    name: 'TableDetails',
                    params: { tableUuid:scope.row.tableUuid }
                  }"
                >{{ scope.row.name }}
                </router-link>
              </template>
            </el-table-column>
            <el-table-column property="source" :label="$t('tables.listTable.source')" />
            <el-table-column property="createDate" :label="$t('tables.listTable.createDate')">
              <template slot-scope="scope">
                {{ $moment(scope.row.createDate).format('YYYY-MM-DD') }}
              </template>
            </el-table-column>
            <el-table-column property="updateDate" :label="$t('tables.listTable.updateDate')">
              <template slot-scope="scope">
                {{ $moment(scope.row.updateDate).format('YYYY-MM-DD') }}
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="Operations"
              width="160"
            >
              <template slot-scope="scope">
                <el-button
                  type="text"
                  size="small"
                  @click="$router.push({name: 'TableDetails', params: { tableUuid:scope.row.tableUuid }})"
                >
                  Detail
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  @click="editTable(scope.row)"
                >
                  Edit
                </el-button>
                <el-button
                  type="text"
                  size="small"
                  @click="deleteTable(scope.row)"
                >
                  Delete
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </template>

    <el-dialog
      :title="$t('tables.importCsv')"
      :visible.sync="showModal"
      width="45%"
      destroy-on-close
      @close="modalClosed"
    >
      <import-csv-form :table="currentTable" @closeModal="modalClosed" />
    </el-dialog>
  </div>
</template>

<script>
import { tableActions } from '@/store/modules/tables'
import { mapGetters } from 'vuex'
import ImportCsvForm from './components/ImportCsvForm'

export default {
  name: 'TableList',
  components: {
    ImportCsvForm
  },

  data: () => {
    return {
      showModal: false,
      loading: false,
      currentTable: null
    }
  },
  computed: {
    ...mapGetters('tables', {
      tables: `getAllTables`
    })
  },

  created() {
    this.loadTables()
  },

  methods: {
    loadTables() {
      this.loading = true
      setTimeout(() => {
        this.$store.dispatch(
          `tables/${tableActions.GET_TABLES}`
        ).finally(() => {
          this.loading = false
        })
      }, 1000)
    },

    /**
       * delete table
       * @param table
       */
    deleteTable(table) {
      this.loading = true
      this.$store.dispatch(
        `tables/${tableActions.DELETE_TABLE}`,
        table.tableUuid
      ).finally(() => {
        this.$notify({
          title: 'Success',
          message: this.$t('notifications.successDelete', { table: table.name }),
          type: 'error'
        })
        this.loading = false
      })
    },

    /**
       * set table to edit and show modal
       * @param {Object} row: selected row object
       */
    editTable(row) {
      this.currentTable = row
      this.showModal = true
    },

    /**
       * Called on modal close event
       */
    modalClosed() {
      this.showModal = false
      this.currentTable = null
    }
  }
}
</script>

<style lang="scss" scoped>
  .table-list {
    display: flex;
    justify-content: center;
    &__item-list {
      width: 80%;
    }
    &__import-btn {
      display: flex;
      flex-direction: row-reverse;
    }
  }
</style>
