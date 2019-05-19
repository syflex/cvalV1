<template>
  <q-page class="flex flex-center">
    <div class="row" style="max-width: 700px">
        <q-btn outline :to="{name: 'Crop'}" label="Add Crop" class="col-5 q-ma-xs">
          <img src="statics/icons/crop.png" width="50%">
        </q-btn>
        <q-btn outline :to="{name: 'Crops'}" label="View Crop" class="col-5 q-ma-xs">
          <img src="statics/icons/crop.png" width="50%">
        </q-btn>
        <q-btn outline :to="{name: 'Structure'}" label="Add Structure" class="col-5 q-ma-xs">
          <img src="statics/icons/home.png" width="50%">
        </q-btn>
        <q-btn outline :to="{name: 'Structures'}" label="View Structure" class="col-5 q-ma-xs">
          <img src="statics/icons/home.png" width="50%">
        </q-btn>
      </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
