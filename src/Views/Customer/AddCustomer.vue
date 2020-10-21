<template>
  <FormCustomer />
</template>


<script>
import FormCustomer from '../../components/FormCustomer'

export default {
  name: 'AddCustomer',
  components: {
    FormCustomer
  },
  methods: {
    addCustomer: function addCust(data) {
      var customer = {
        _id: "client_" + data.name + "_" + data.codePostal + "_",
        nom: data.name,
        firstName: data.firstName,
        address: data.address,
        postCode: data.postCode,
        city: data.city,
        email: data.email,
        phone: data.phone
      };
      this.$db.put(customer, function callback(err) {
        if (!err) {
          console.log('Successfully posted customer!');
        }
      });
    }
  }
}
</script>