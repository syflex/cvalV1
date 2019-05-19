<template>
  <q-page padding>
    <!-- content -->
    <structure v-if="$route.name === 'Structure'"/>
    <viewStructure v-else-if="$route.name === 'Structures'"/>
  </q-page>
</template>

<script>
import structure from './../components/structure/index'
import viewStructure from './../components/structure/view'
export default {
  name: 'Crops',

  components:{
    structure,
    viewStructure
  }
}
</script>

<style>
</style>
