<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item"><router-link :to="{name:'ShowCustomer'}">Clients</router-link></li>
        <li class="breadcrumb-item active">Modifier</li>
      </ol>
    </nav>
    <FormCustomer title='Modifier un client' fromPage='edit' />
  </div>
</template>

<script>
import FormCustomer from '../../components/FormCustomer'

export default {
  name: 'EditCustomer',
  data() {
    return {
      key: this.$route.params.key
    }
  },
  created() {
    if (this.key == null) {
        this.$router.push({ name: 'NotFound'})
    }
    console.log(this.key)
  },
  components: {
    FormCustomer
  },
  methods: {

  },
}
</script>