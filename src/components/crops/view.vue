<template>
    <div>
        <q-table title="Crops Claimant's Table" :data="tableData" :columns="columns" row-key="name"  
        :rowsPerPage="10" rows-per-page-label="10"/>
        <q-btn disable="" label="Sync with server" color="secondary" icon="email" size="xl" @click="sync" class="full-width q-mt-xl"/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            columns: [
                { name: 'claimant_id', align: 'left', label: 'Claimant#', field: 'claimant_id'},
                { name: 'first_name', label: 'First Name', field: 'first_name', sortable: true },
                { name: 'last_name', label: 'Last Name', field: 'last_name', sortable: true },
                { name: 'location', label: 'Location', field: 'location' },
                { name: 'community', label: 'community', field: 'community' },
                { name: 'coordinates', label: 'Coordinates', field: 'coordinates' },
            ],
            tableData: [],           
        }
    },


created() {
    this.get_data()
},
  methods:{
      get_data(){
          this.$axios.get(process.env.Api+'/api/crop')
          .then(Response => {
             this.tableData = Response.data.data
          })
      },

      sync(){
          this.$axios.get(process.env.Api+'api/all')
          .then(Response => {
              this.$axios.post('/api/all',{
                  claimants: Response.data.claimant,
                  data: Response.data.data,
              })
              .then(Response => {
                   this.$q.notify({color: 'secondary', icon: 'done',
                        message: 'data synced with server successfully'
                    })
              })                          
          })

      }
  }
}
</script>

<style>

</style>
