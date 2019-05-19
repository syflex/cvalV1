<template>
    <div>
        <q-card flat class="row full-width gutter-sm">
            <div class="col-7">
                <q-input v-model="form.claimant_id" placeholder="Claimant ID"/>
                <q-input v-model="form.first_name" placeholder="Claimant First Name"/>
                <q-input v-model="form.last_name" placeholder="Claimant Last Name"/>
                <q-input v-model="form.other_name" placeholder="Claimant Other Names"/>
                <q-input v-model="form.location" placeholder="Claimant Location"/>
                <q-input v-model="form.community" placeholder="Claimant Community"/>
                <q-input v-model="form.coordinates" placeholder="Coodinates"/>                
            </div>
            <div class="col-5">
                <img :src="image ? form.image : '/statics/user.jpg'" width="60%">
                <img :src="form.c_signature ? form.c_signature : ''" width="60%">
                <div v-if="!image">
                    <input type="file" @change="onFileChange">
                </div>
                <div v-else>
                    <button @click="removeImage">Remove image</button>
                </div>
                <div v-if="!form.c_signature">
                    <add @clicked="onClickChild"/>
                </div>
                <div v-else>
                    <button @click="form.c_signature = null">Remove signature</button>
                </div>                       
            </div>
        </q-card>

        
    <q-card-separator class="bg-grey-10 q-mt-md"/>
    <q-card-separator class="bg-grey-10 q-mb-sm"/>

    <q-card flat v-for="(structure, index) in form.structures" v-bind:key="index" class="row">     
       
        <q-field class="col-5">
            <q-select filter v-model="structure.name" float-label="Select structure" :options="mainData" 
                @input="check(structure.name,index)"
            />
        </q-field>        
                
        <q-field class="col-2">
            <q-input v-model="structure.quantity" float-label="Quantity" numeric-keyboard-toggle placeholder="Quantity"/>
        </q-field>
        <q-field class="col-2">
            <q-input v-model="structure.cost" float-label="Cost (N)" numeric-keyboard-toggle placeholder="Cost (N)"/>
        </q-field>
        <q-field class="col-2">
            <q-input :value="structure.value = (Number(structure.quantity) * Number(structure.cost))" float-label="Rate (N)" numeric-keyboard-toggle placeholder="Rate (N)"/>
        </q-field>

        <div class="col-lg-1">
           <q-btn color="red" size="sm" @click="removeLine(index)" icon="delete" round/>    
        </div>
        <q-btn color="tertiary" label="add new row" size="sm" v-if="index + 1 === form.structures.length" @click="addLine" icon="add" class="full-width q-my-sm" />
    </q-card>

    <div class="row full-width">
        <q-btn class="full-width" @click="save_entery" color="secondary" label="Save Entery" :loading="loading" no-caps>
                <q-spinner-ios slot="loading" class="q-mr-sm"></q-spinner-ios>
                <span slot="loading"> Saving Entery..</span>
        </q-btn>  
    </div>

    </div>
</template>

<script>
// import signature from './partials/signature'
import { QUploader } from "quasar";
import structureList from './../../data/structure/structure_list.js'
import structurePrice from './../../data/structure/structure_price.js'
import cropType from './../../data/crop/crop_type.js'
import cropMaturity from './../../data/crop/crop_maturity.js'
import add from "./partials/add"
export default {

    data(){
        return{
            imae: null,
            image: '',
            form:{
                valuer_id: '1',
                claimant_id: 'NNPC/MCO/AKK/LOT12/'+ Date.now(),
                first_name: null,
                last_name: null,
                other_name: null,
                location: null,
                community: null,
                coordinates: null,
                image: null,
                c_signature: null,

                structures: [],

            },
            loading: false,
            opened: false,

            
            filter_type: null,

            signature: false,
                          
            mainData: structureList,

            dataPrice: structurePrice,             

        }
    },

    components:{
        QUploader,add
    },
    
    methods:{
        save_entery(){
            this.loading = true;
            this.$axios.post('api/structure', this.form)
            .then(Response => {

                this.$q.notify({color: 'secondary', icon: 'done',
                        message: 'Structure Entry saved successfully'
                    })
                    this.loading = false;
                    this.opened = false;
                    
                    
                    this.clearEntery();
                    

            })
            .catch(err => {
                    this.loading = false;
                    this.opened = false 
                     this.$q.notify({color: 'negative', icon: 'done',
                        message: 'Error: data not saved  please try again'
                    }) 
            })
        },


        check(name,index){
            
            var price;

            var newData = this.dataPrice.filter(function (data) {
               return data.label === name
            })
            
             var price =  newData[0].value           

            this.form.structures[index].cost = price
        },

        

        addLine () {
            let checkEmptyLines = this.form.structures.filter(structure => structure.value === null)
                if (checkEmptyLines.length >= 2 && this.form.structures.length > 0) return
                this.form.structures.push({
                    name: null,
                    quantity: null,
                    cost: null,
                    value: null,
                })
        },

        removeLine (lineId) {
            if (lineId > 0) this.form.structures.splice(lineId, 1)
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
        this.form.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function (e) {
      this.image = '';
    },

    onClickChild (value) {
         this.form.c_signature = value // someValue
      },
    
    clearEntery(){
        this.form.claimant_id = 'NNPC/MCO/AKK/LOT12/'+ Date.now(),
                    this.form.first_name = null;
                    this.form.last_name = null;
                    this.form.other_name = null;
                    this.form.location = null;
                    this.form.community = null;
                    this.form.coordinates =  null;
                    this.form.image = null;
                    this.form.c_signature = null;
                    
                    this.form.structures = [];

                    for (let index = 0; index < 3; index++) {
                        this.form.structures.push({
                            name: null,
                            quantity: null,
                            cost: null,
                            value: null,
                        })     
                    }     
    }

    },

    mounted () {
        for (let index = 0; index < 3; index++) {
            this.form.structures.push({
                name: null,
                quantity: null,
                cost: null,
                value: null,
            })     
        }        
    }

}
</script>

<style>

</style>
