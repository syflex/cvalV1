<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { LocalStorage } from 'quasar'
export default {
  name: 'App',
  created() {
    if(LocalStorage.getItem('cvalCounter')){

    }else{
      LocalStorage.set('cvalCounter', "0")
    }    
  },
}
</script>

<style>
</style>
