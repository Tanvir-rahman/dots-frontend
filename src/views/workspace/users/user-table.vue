<template>
  <h-table :table-data="tableData" />
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: 'Tom',
          email: 'California',
          lastlogin: '2020-07-02',
          Role: 'Member',
          Status: 'Active'
        },
        {
          name: 'John',
          email: 'Andalucia',
          lastlogin: '2020-07-02',
          Role: 'Member',
          Status: 'Inactive'
        },
        {
          name: 'John',
          email: 'Andalucia',
          lastlogin: '2020-07-02',
          Role: 'Member',
          Status: 'Active'
        }
      ]
    }
  }
}
</script>
