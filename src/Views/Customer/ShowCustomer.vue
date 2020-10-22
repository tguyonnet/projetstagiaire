<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Client</li>
      </ol>
    </nav>
    <h1>Clients 
      <button>
          <router-link :to="{name:'AddCustomer'}" class="fa fa-plus" aria-haspopup="true"></router-link>
      </button>
    </h1>
    <form class="form-inline my-2 my-lg-0" style="place-content:center">
      <input v-model="valueSearch" class="form-cotrol mr-sm-2" type="text" placeholder="Recherche..">
      <button @click="search()" class="btn btn-outline-success my-2 my-sm-0" type="submit" >Rechercher</button>
    </form>
    <v-app id="inspire">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left"> Name </th>
                <th class="text-left"> Prénom </th>
                <th class="text-left"> Adresse </th>
                <th class="text-left"> Code postal </th>
                <th class="text-left"> Ville </th>
                <th class="text-left"> Email </th>
                <th class="text-left"> Téléphone </th>
                <th class="text-center"> Actions </th>
              </tr>
            </thead>
            <tbody v-if="customers.length > 0">
              <tr v-for="customer in customersFilter" :key="customer.name">
                
                <td>{{ customer.value.name }}</td>
                <td>{{ customer.value.firstName }}</td>
                <td>{{ customer.value.address }}</td>
                <td>{{ customer.value.postCode }}</td>
                <td>{{ customer.value.city }}</td>
                <td>{{ customer.value.email }}</td>
                <td>{{ customer.value.phone }}</td>
                <td>         
                  <router-link class="btn btn-primary" style="color: #fff!important" :to="{name:'EditCustomer', params:{key: customer.value._id}}">Modifier</router-link>
                  <button type="button" class="btn btn-secondary">Créer devis</button>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-app> 
  </div>
</template>

<script>
  const axios = require('axios');
export default {
  name: 'ShowCustomer',
  //toutes les variables qu'on utilise dans le template
  data() {
    return {  
      customers: [],
      customersFilter:[],
      valueSearch:'',
    }
  },
  //la méthode created() s'appelle toute seule quand on ouvre la page
  created() {
    let vm = this
    // permet de recupérer tous les documents "client"
   // vm.customers = vm.$dm.replicate.to("https://28bca146-7c07-46d2-b259-679296a4cb7c-bluemix.cloudant.com/madera/_design/function/_view/vue_client")
    /*vm.$db.allDocs({
      include_docs: true,
      starkey: 'client_',
      endkey: 'client_\uffff'
    }).then(function(docs) {
       //console.log(docs.rows)
      vm.customers = docs.rows
      vm.customers  =  vm.customers .filter(c =>{
        const id = c.doc._id
        if(id){
          //console.log(c)
          //console.log(id)
          if( id.includes('client')){
            return true
          }
         
        }else{
          return false
        }
       
        })
    });*/
   
    //console.log("get")  
    const token = btoa('apikey-69bcda5d6c17493f9ec349fa46f40c94:2565427be305db84eb986983bc4cfc5cee866370')
       axios.get("https://28bca146-7c07-46d2-b259-679296a4cb7c-bluemix.cloudant.com/madera/_design/function/_view/vue_client_sans_erreur",
        {
        headers: {
          'Authorization': `Basic ${token}` 
        }
      })
     .then(function (response) {
       // handle success
       //console.log(response);
       
       vm.customers = response.data.rows
      // console.log(  vm.customers);
       // console.log(  vm.customers[0].value.name);
       vm.customersFilter = vm.customers 
     }).catch(function (error) {
       // handle error
       console.log(error);
     })
  },
  methods:{
    search:function(){
      console.log(this.customers)
      this.customersFilter = this.customers.filter(c =>{
        const nom = c.value.name
        if(nom){
          //console.log(c)
          //console.log(nom)
          //console.log(this.valueSearch)
          if( nom.includes(this.valueSearch.toUpperCase())){
            return true
          }   
        }else{
          return false
        }
      })
    }
  }
}
</script>
