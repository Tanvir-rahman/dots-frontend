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
          email: 'tom@place.com',
          lastlogin: '2020-07-02',
          Role: 'Member',
          Status: 'Active'
        },
        {
          name: 'John',
          email: 'john@doe.com',
          lastlogin: '2020-07-02',
          Role: 'Member',
          Status: 'Inactive'
        },
        {
          name: 'John',
          email: 'john@here.com',
          lastlogin: '2020-07-02',
          Role: 'Member',
          Status: 'Active'
        }
      ]
    }
  }
}
</script>
