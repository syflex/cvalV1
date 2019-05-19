<template>
  <q-page padding>
    <!-- content -->
    <crops v-if="$route.name === 'Crop'"/>
    <viewCrops v-else-if="$route.name === 'Crops'"/>
  </q-page>
</template>

<script>
import crops from './../components/crops/index'
import viewCrops from './../components/crops/view'
export default {
  name: 'Crops',

  components:{
    crops,
    viewCrops
  }
}
</script>

<style>
</style>
