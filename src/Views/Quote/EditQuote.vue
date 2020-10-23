<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowQuote'}">Devis</router-link></li>
        <li class="breadcrumb-item active">Modifier</li>
      </ol>
    </nav>
    <div v-if="quote">
      <FormQuote title='Modifier un devis' fromPage='edit' :quote="quote"/>
    </div>
  </div>
</template>

<script>
import FormQuote from '../../components/FormQuote.vue'

export default {
  name: 'EditQuote',
  data(){
    return {
      id: this.$route.params.id,
      quoteFilter:[],
      quote: '',
    }
  },
  created(){
    //S'il n'y a pas d'id de passé en param, on renvoie vers la page 404
    if (this.key == null) {
        this.$route.push({ name: 'NotFound'})
    }
    this.findOneQuote(this)
  },
  components:{
    //on utilise le formulaire de commun a l'ajout et la modification de devis
    FormQuote
  },
  methods:{
    findOneQuote(vm) {
      vm.$db.get(vm.id)     
      .then(function (response) {
       // Succes de la requete
        vm.quote = response
      }).catch(function (error) {
       // Erreur de la requete
        console.log(error);
      })
    }
  }, 
}
</script>