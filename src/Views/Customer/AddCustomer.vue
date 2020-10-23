<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowCustomer'}">Clients</router-link></li>
        <li class="breadcrumb-item active">Ajouter</li>
      </ol>
    </nav>
    <FormCustomer title='Ajouter un client' fromPage='add' />
  </div>
</template>

<script>

import FormCustomer from '../../components/FormCustomer'
import myMixin from '../../mixins.js'
export default {
  name: 'AddCustomer',
  mixins: [myMixin],
  components: {
    //on utilise le formulaire de commun a l'ajout et la modification de clients
    FormCustomer
  },
}
</script>