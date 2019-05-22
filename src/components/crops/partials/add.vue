<template>
    <div>
        <q-btn no-caps color="accent" label="Capture Signature" @click="opened = true" />


        <q-dialog  v-model="opened">
            <q-card>            
                <q-bar>
                    <div class="text-h6">Capture Signature</div>
                    <div>{{Date.now()}}</div>
                    <q-space />
                    <q-btn dense flat icon="close" v-close-popup>
                        <q-tooltip>Close</q-tooltip>
                    </q-btn>
                </q-bar>

                <q-card-section>
                    this is to confirm that Messrs Muhammad & Co. staff visited my farmland and carried out the enumeration
                    of the above stated crops and economics trees in my presence/attorney and the claims above have been read 
                    and translated to me in my local dialect which i have agreed and consented. I hereby endorse this document
                    to confirm the true position of my claims.
                </q-card-section>
               
                <q-card-section>
                    <q-btn no-caps color="accent" label="Accept & sign" @click="signature = true , fingerPrint = false, upload = false " class="full-width"/>
                    <q-btn no-caps color="accent" label="Accept & thumb print" @click="fingerPrint = true, signature = false, upload = false" class="full-width"/>
                    <q-btn no-caps color="accent" label="Upload Sign/Finger Print" @click="upload = true , fingerPrint = false, signature = false" class="full-width"/>
                </q-card-section>

                <q-card-section v-if="signature">
                     <VueSignaturePad width="100%" height="200px" ref="signaturePad" class="bg-grey-5" />
                    <div>
                        <q-btn color="accent" @click="save">Save</q-btn>
                        <q-btn color="negative" @click="undo">Undo</q-btn>
                    </div>
                </q-card-section>

                <q-card-section v-if="fingerPrint">
                    <div class="row flex-center">
                        <div style="max-width: 200px" class="bg-white">
                            <img :src="finger" width="50%">     
                            <span v-if="loading" color="white" :loading="loading" no-caps>
                                <q-spinner-ios slot="loading" class="q-mr-sm"></q-spinner-ios>                                
                            </span>                 
                        </div>
                    </div>
                    <div>
                        <q-btn color="accent" @click="enrole">Enroll FingerPrint</q-btn>
                        <q-btn v-if="finger" color="accent" @click="saveFinger">Save Finger Print</q-btn>
                        <q-btn  v-if="finger" color="negative" @click="finger = null">Undo</q-btn>
                    </div>
                </q-card-section> 

                <q-card-section v-if="upload">
                    <img :src="image ? image : ''" width="50%">
                    <input v-if="!image" type="file" @change="onFileChange">
                    <div>
                        <q-btn color="accent" @click="saveImage">Save</q-btn>
                        <q-btn color="negative" @click="removeImage">Undo</q-btn>
                    </div>
                </q-card-section>           
            </q-card>
        </q-dialog >


    </div>
</template>

<script>

import { QUploader } from "quasar";
import fingers from "./../../../data/fingers.js"
export default {
    props:['signature_p'],

    data(){
        return{
            opened: false,            
            signature: this.signature_p ? signature_p : false,
            fingerPrint: false,
            upload: false,
            loading: false,
            fingersList: fingers,
            finger: null,
            image: null,
        }
    },

    components:{
        QUploader
    },
    
    methods:{
       
        undo() {
            this.$refs.signaturePad.undoSignature();
        },

        save() {
            const { isEmpty, data } = this.$refs.signaturePad.saveSignature();        
            this.$emit('clicked', data)
        },

        enrole(){
            this.loading = true
            setTimeout(() => {
                    this.loading = false
                    this.finger = this.fingersList[Math.floor(Math.random() * this.fingersList.length)];
                }, 3500)
        },

        saveFinger() {
            this.$emit('clicked', this.finger)
        },

        onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
            return;
        this.createImage(files[0]);
        },

        createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
            vm.image = e.target.result;
            this.image = e.target.result;        
        };
        reader.readAsDataURL(file);
        },

        saveImage() {
            this.$emit('clicked', this.image)
        },

        removeImage: function (e) {
        this.image = null;
        },


    },

}
</script>

<style>

</style>
