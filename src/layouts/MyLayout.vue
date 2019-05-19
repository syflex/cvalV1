<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round :to="{name: 'Home'}" aria-label="Menu" >
          <q-icon name="home" />
        </q-btn>

        <q-toolbar-title>
           CVAL
        </q-toolbar-title> 
        <q-btn no-caps flat label="crops" :to="{name: 'Crop'}"/>
        <q-btn no-caps flat label="view crops" :to="{name: 'Crops'}"/>
        <q-btn no-caps flat label="Structure" :to="{name: 'Structure'}"/>
        <q-btn no-caps flat label="view Structure" :to="{name: 'Structures'}"/>
      </q-toolbar>
    </q-header>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {}
  },
 
}
</script>

<style>
</style>
