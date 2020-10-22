<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Devis</li>
      </ol>
    </nav>
    <h1>
      Devis 
      <button>
          <router-link :to="{name:'AddQuote'}" class="fa fa-plus" aria-haspopup="true"></router-link>
      </button>
    </h1>
    <form class="form-inline my-2 my-lg-0" style="place-content:center">
      <input v-model="valueSearch" class="form-cotrol mr-sm-2" type="text" placeholder="Recherche..">
      <button @click="search()" class="btn btn-outline-success my-2 my-sm-0" type="submit" >Rechercher</button>
    </form>
    <v-app id="inspire">
      <!-- Tableau de devis -->
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"> N° Devis</th>
              <th class="text-left"> Nom Devis</th>
              <th class="text-left"> Date Création</th>
              <th class="text-left"> Commercial lié</th>
              <th class="text-left"> Client lié</th>
              <th class="text-left"> Prix HT</th>
              <th class="text-left"> Statut</th>     
            </tr>
          </thead>
          <tbody v-if="quotes.length > 0">  
            <tr v-for="quote in quotes" :key="quote.number">
              <td>{{ quote.value.key}}</td>
              <td>{{ quote.value.nameDevis }}</td>
              <td>{{ quote.value.dateCreate}}</td>
              <td>{{ quote.value.keyCommercial }}</td>
              <td>{{ quote.value.keyClient}}</td>
              <td>{{ quote.value.puht}}</td>
              <td>{{ quote.value.status}}</td>
              <td>
                <router-link class="btn btn-primary" style="color: #fff!important" :to="{name:'EditQuote', params:{id: quote.value._id}}">Modifier</router-link>
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
  name: 'ShowQuote',
  data() {
    return {
      quotes: [],
      quotesFilter: [],
      valueSearch:'',
    }
  },
  created() {
    //au démarrage de la page, on va chercher les devis
     this.findAllquotes(this)
  },
  methods:{
    search(){
      this.quotesFilter = this.quotes.filter(quote =>{
        let name = quote.value.name
        if(name){
          if( name.includes(this.valueSearch.toUpperCase())){
            return true
          }   
        }
        return false
      })
    },
    findAllquotes(vm) {
      axios.get(vm.$api + "/_design/function/_view/vue_devis_sans_erreur",{
        headers: {
          'Authorization': `Basic ${vm.$token}` 
        }
      })
     .then(function (response) {
       // Succes de la requete
       vm.quotes = response.data.rows
       vm.quotesFilter = vm.quotes 
     }).catch(function (error) {
       // Erreur de la requete
       console.log(error);
     })

    }
  }
}
</script>
