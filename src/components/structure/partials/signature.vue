<template>
<div>
    <q-btn no-caps label="Signature" @click="opened = true" />

    <q-modal v-model="opened" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
  <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn flat round dense v-close-overlay  icon="keyboard_arrow_left" />
      <q-toolbar-title>
        Capture Signature
      </q-toolbar-title>
    </q-toolbar>

    <div class="layout-padding">
      <div id="app">
    <VueSignaturePad
      width="500px"
      height="500px"
      ref="signaturePad"
    />
  </div>
    <div>
      <button @click="save">Save</button>
      <button @click="undo">Undo</button>
    </div>
  
    </div>
  </q-modal-layout>
</q-modal>
</div>
</template>

<script>
export default {
data () {
    return {
      opened: false
    }
  },

  methods:{
        undo() {
        this.$refs.signaturePad.undoSignature();
      },
      save() {
        const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
        console.log(isEmpty);
        console.log(data);
      }

  }
}
</script>

<style>

</style>
