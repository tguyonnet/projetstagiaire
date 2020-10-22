<template>
  <div class="about">
      <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
      <li class="breadcrumb-item active" aria-current="page">Devis</li>
    </ol>
  </nav>
    <h1>Gestion des devis</h1>
    <FormDevis title='Modifier un devis' fromPage='edit'/>
  </div>
  
</template>
<script>
import FormDevis from '../../components/FormDevis'
export default {
  data(){

  },
  created(){

  },
  components:{
    FormDevis
  },
  methods:{

  },

}
</script>