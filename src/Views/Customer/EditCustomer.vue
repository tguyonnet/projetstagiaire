<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowCustomer'}">Clients</router-link></li>
        <li class="breadcrumb-item active">Modifier</li>
      </ol>
    </nav>
    <!-- <FormCustomer title='Modifier un client' fromPage='edit' /> -->
  </div>
</template>

<script>
const axios = require('axios');
// import FormCustomer from '../../components/FormCustomer'
export default {
  name: 'EditCustomer',
  data() {
    return {
      key: this.$route.params.key,
      customersFilter:[],
    }
  },
  created() {
    if (this.key == null) {
        this.$router.push({ name: 'NotFound'})
    }
    
    this.findOneCustomer(this)
  },
  components: {
    // FormCustomer
  },
  methods: {
    findOneCustomer(vm) {
       axios.get(vm.$api + "/_design/function/_view/vue_client_sans_erreur",{
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