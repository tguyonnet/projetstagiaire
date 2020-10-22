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

export default {
  name: 'AddCustomer',
  components: {
    FormCustomer
  },
  methods: {
  }
}
</script>