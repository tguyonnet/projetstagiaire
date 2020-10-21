<template>
  <FormCustomer title='Modifier un client' fromPage='edit'/>
</template>


<script>
import FormCustomer from '../../components/FormCustomer'

export default {
  name: 'EditCustomer',
  data() {
    
  },
  created() {

  },
  components: {
    FormCustomer
  },
  methods: {

  },
  props: [
    'customer',
  ],
}
</script>