<template>
     <q-table
    title="Structure Claimant's Table"
    :data="tableData"
    :columns="columns"
    row-key="name"
  />
</template>

<script>
export default {
    data: () => ({
    columns: [
        { name: 'claimant_id', align: 'left', label: 'Claimant#', field: 'claimant_id'},
        { name: 'first_name', label: 'First Name', field: 'first_name', sortable: true },
        { name: 'last_name', label: 'Last Name', field: 'last_name', sortable: true },
        { name: 'location', label: 'Location', field: 'location' },
        { name: 'community', label: 'community', field: 'community' },
        { name: 'coordinates', label: 'Coordinates', field: 'coordinates' },
    ],
    tableData: []
  }),

created() {
    this.get_data()
},
  methods:{
      get_data(){
          this.$axios.get('api/structure')
          .then(Response => {
             this.tableData = Response.data.data
          })
      }
  }
}
</script>

<style>

</style>
