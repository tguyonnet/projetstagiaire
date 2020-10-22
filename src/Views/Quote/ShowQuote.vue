<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Devis</li>
      </ol>
    </nav>
    <h1>Devis 
      <button>
          <router-link :to="{name:'AddQuote'}" class="fa fa-plus" aria-haspopup="true"></router-link>
      </button>
    </h1>
    <v-app id="inspire">
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
            <tr v-for="onlyDevis in quotes" :key="onlyDevis.number">
              <td>{{ onlyDevis.value.key}}</td>
              <td>{{ onlyDevis.value.nameDevis }}</td>
              <td>{{ onlyDevis.value.dateCreate}}</td>
              <td>{{ onlyDevis.value.keyCommercial }}</td>
              <td>{{ onlyDevis.value.keyClient}}</td>
              <td>{{ onlyDevis.value.puht}}</td>
              <td>{{ onlyDevis.value.status}}</td>
              <td>
                <router-link class="btn btn-primary" style="color: #fff!important" to="/devis/modifier">Modifier</router-link>
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
    }
  },
    created() {
     this.findAllquotes(this)
  },
  methods:{
    findAllquotes(vm) {
      axios.get(vm.$api + "/_design/function/_view/vue_devis_sans_erreur",{
        headers: {
          'Authorization': `Basic ${vm.$token}` 
        }
      })
     .then(function (response) {
       // handle success
       vm.quotes = response.data.rows
       vm.quotesFilter = vm.quotes 
     }).catch(function (error) {
       // handle error
       console.log(error);
     })

    }
  }
}
</script>
