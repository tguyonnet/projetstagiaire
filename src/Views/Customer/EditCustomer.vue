<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowCustomer'}">Clients</router-link></li>
        <li class="breadcrumb-item active">Modifier</li>
      </ol>
    </nav>
    <FormCustomer title='Modifier un client' fromPage='edit' />
  </div>
</template>

<script>
const axios = require('axios');
import FormCustomer from '../../components/FormCustomer'
export default {
  name: 'EditCustomer',
  data() {
    return {
      key: this.$route.params.key,
      customersFilter:[],
    }
  },
  created() {
    let vm = this
    if (this.key == null) {
        this.$router.push({ name: 'NotFound'})
    }
    console.log("Key = "+this.key)
     
   const token = btoa('apikey-69bcda5d6c17493f9ec349fa46f40c94:2565427be305db84eb986983bc4cfc5cee866370')
       axios.get("https://28bca146-7c07-46d2-b259-679296a4cb7c-bluemix.cloudant.com/madera/_design/function/_view/vue_client_sans_erreur",
        {
        headers: {
          'Authorization': `Basic ${token}` 
        }
      })
     .then(function (response) {

      console.log("Reponse : "+ response)
      console.log(response.data.rows)
     
      console.log("before filtre")
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










    

  },
  components: {
    FormCustomer
  },
  methods: {

  },
}
</script>