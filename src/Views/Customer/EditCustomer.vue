<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowCustomer'}">Clients</router-link></li>
        <li class="breadcrumb-item active">Modifier</li>
      </ol>
    </nav>
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
      id: this.$route.params.id,
      customersFilter:[],
      customer: '',
    }
  },
  created() {
    //Si il n'y a pas d'id de passé en param, on renvoie vers la page 404
    if (this.id == null) {
        this.$router.push({ name: 'NotFound'})
    }
    //sinon on va chercher le client qu'on veut modifier
    this.findOneCustomer(this)
  },
  components: {
    //on utilise le formulaire de commun a l'ajout et la modification de clients
    FormCustomer
  },
  methods: {
    findOneCustomer(vm) {
      vm.$db.get(vm.id)     
      .then(function (response) {
       // Succes de la requete
        vm.customer = response
      }).catch(function (error) {
       // Erreur de la requete
        console.log(error);
      })
    }
  },
}
</script>