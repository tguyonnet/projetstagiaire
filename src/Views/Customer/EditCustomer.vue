<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowCustomer'}">Clients</router-link></li>
        <li class="breadcrumb-item active">Modifier</li>
      </ol>
    </nav>
    <!-- {{ customer }} -->
    <div v-if="customer">
      <FormCustomer title='Modifier un client' fromPage='edit' :customer="customer"/>
    </div>
  </div>
</template>

<script>
import FormCustomer from '../../components/FormCustomer'
export default {
  name: 'EditCustomer',
  data() {
    return {
      key: this.$route.params.key,
      customersFilter:[],
      customer: '',
    }
  },
  created() {
    if (this.key == null) {
        this.$router.push({ name: 'NotFound'})
    }
    
    this.findOneCustomer(this)
  },
  components: {
    FormCustomer
  },
  methods: {
    findOneCustomer(vm) {
      vm.$db.get(vm.key)     
      .then(function (response) {
        // handle success
        console.log(response) 
        vm.customer = response
      }).catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  },
}
</script>