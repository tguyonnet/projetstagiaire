<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowQuote'}">Devis</router-link></li>
        <li class="breadcrumb-item active">Ajouter</li>
      </ol>
    </nav>
    <FormQuote title='Ajouter un devis' fromPage='add'/>
  </div>  
</template>

<script>
import FormQuote from '../../components/FormQuote.vue'

export default {
  name: 'AddQuote',
  components:{
    //on utilise le formulaire de commun a l'ajout et la modification de clients
    FormQuote
  },
}
</script>