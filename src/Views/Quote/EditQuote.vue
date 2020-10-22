<template>
  <div class="about">
      <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Devis</li>
    </ol>
  </nav>
    <h1>Gestion des devis</h1>
     <FormQuote title='Modifier un devis' fromPage='edit' />
  </div>
  
</template>
<script>
//import FormDevis from '../../components/FormDevis'
const axios = require('axios');
export default {
  name: 'EditQuote',
  data(){
    return {
      key:this.$route.params.key,
      quoteFilters:[],
    }

  },
  created(){
    if (this.key == null) {
        this.$router.push({ name: 'NotFound'})
    }
    
    this.findOneQuote(this)
  },
  components:{
    //FormDevis
  },
  methods:{
    findOneCustomer(vm) {
       axios.get(vm.$api + "/_design/function/_view/vue_devis_sans_erreur",{
        headers: {
          'Authorization': `Basic ${vm.$token}` 
        }
      })
     .then(function (response) {
      vm.customersFilter = response.data.rows.filter(c =>{
      const id = c.id       
        if( id.includes(vm.key)){
          console.log(c)
          return true
        }else{
          return false
        }
      })
     }).catch(function (error) {
       // handle error
       console.log(error);
     })
    }
  }, 
}
</script>