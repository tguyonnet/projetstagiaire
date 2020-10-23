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
      <FormCustomer title='Modifier un client' fromPage='edit'  :id="id"/>
    </div>
  </div>
</template>

<script>
//:customer="customer" 
import FormCustomer from '../../components/FormCustomer'
import myMixin from '../../mixins.js'

export default {
  name: 'EditCustomer',
  mixins: [myMixin],
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  created() {
    //Si il n'y a pas d'id de passé en param, on renvoie vers la page 404
    if (this.id == null) {
        this.$router.push({ name: 'NotFound'})
    }
    //sinon on va chercher le client qu'on veut modifier
    /*console.log(this.id)
    this.findOneCustomer(this.id)
    console.log(this.customer)*/
     //return this.findOneCustomer(this.id)
  },
  components: {
    //on utilise le formulaire de commun a l'ajout et la modification de clients
    FormCustomer
  },

}
</script>