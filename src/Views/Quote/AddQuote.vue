<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowQuote'}">Devis</router-link></li>
        <li class="breadcrumb-item active">Créer</li>
      </ol>
    </nav>
    <FormQuote title='Ajouter un devis' fromPage='add' :customerID="customerID"/>
  </div>  
</template>

<script>
import FormQuote from '../../components/FormQuote.vue'

export default {
  name: 'AddQuote',
  data(){
    return{
      customerID: this.$route.params.id,
     
    }

  },
  created() {
    console.log(this.customerID)

    //Si il n'y a pas d'id de passé en param, ca veut dire qu'on vient de la navbar et qu'il n'y a pas de client en param
    /*
    if (this.customerID == null) {
      this.$router.push({ name: 'NotFound'})
    }
    */
    //sinon on va chercher le client qu'on veut modifier
    //this.findOneQuote(this)
  },

  components:{
    //on utilise le formulaire de commun a l'ajout et la modification de clients
    FormQuote
  }/*methods: {
    findOneQuote(vm) {
      vm.$db.get(vm.idClient)     
      .then(function (response) {
       // Succes de la requete
        vm.Quote = response
      }).catch(function (error) {
       // Erreur de la requete
        console.log(error);
      })
    }
  },*/
}
</script>