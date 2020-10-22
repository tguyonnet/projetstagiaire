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
                  <router-link class="btn btn-secondary" style="color: #fff!important" :to="{name:'AddQuote'}">Créer devis</router-link>
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
    // permet de recupérer tous les documents "client"
    //ancienne version : méthode directe sans passer par axios
    /*
    vm.$db.allDocs({
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
    });
    */
    this.findAllCustomers(this)
  },
  methods:{
    search(){
      // console.log(this.customers)
      this.customersFilter = this.customers.filter(cust =>{
        let nom = cust.value.name
        if(nom){
          if( nom.includes(this.valueSearch.toUpperCase())){
            return true
          }   
        }
        return false
      })
    },
    findAllCustomers(vm) {
      axios.get(vm.$api + "/_design/function/_view/vue_client_sans_erreur",{
        headers: {
          'Authorization': `Basic ${vm.$token}` 
        }
      })
     .then(function (response) {
       // handle success
       vm.customers = response.data.rows
       vm.customersFilter = vm.customers 
     }).catch(function (error) {
       // handle error
       console.log(error);
     })

    }
  }
}
</script>
