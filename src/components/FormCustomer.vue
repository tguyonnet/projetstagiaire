<template>
  <div class="container">
    <v-app id="inspire">
      <h1>{{ title }}</h1>
      <div v-if="errors.lenght != 0" class="alert alert-danger" role="alert">
        <strong>Problemes</strong>
      </div>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col md="6">
              <v-text-field v-model="dataForm.name" label="Nom"></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="dataForm.firstName" label="Prénom"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="5">
              <v-text-field v-model="dataForm.address" label="Adresse"></v-text-field>
            </v-col>
            <v-col md="4">
              <v-text-field v-model="dataForm.city" label="Ville"></v-text-field>
            </v-col>
            <v-col md="3">
              <v-text-field v-model="dataForm.postCode" :rules="postCodeRules" label="Code postal"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6">
              <v-text-field v-model="dataForm.email" :rules="emailRules" label="E-mail"></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="dataForm.phone" label="Téléphone"></v-text-field>
            </v-col>
          </v-row>
          <v-btn v-if="fromPage == 'add'" :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>
          <v-btn v-if="fromPage == 'edit'" :disabled="!valid" color="warning" class="mr-4" @click="modifiate">Modifier</v-btn>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'FormCustomer',
  data() {
    return { 
      shortid: this.$shortid,
      valid: true,
      errors: [],
      dataForm: {
          name: '',
          firstName: '',
          address: '',
          city: '',
          postCode: '',
          email: '',
          phone: '',
      },
      emailRules: [
        v => /.+@.+\..+/.test(v) || "L' e-mail n'est pas valide",
      ],
      postCodeRules: [
        v => (v && v.length >= 5)
      ],
    }
  },
  created() {
    this.errors = []
  },
  methods: {
    validate () {
      if (this.valid) {
        this.addCustomer(this.dataForm);
      }
      else
      {
        this.errors
      }
    },
    addCustomer(data) {
      console.log(data.name)
      console.log(this.shortid.generate())
      /*
      var customer = {
        _id: "client_" + data.name + "_" + data.postCode + "_" + this.shortid.generate(),
        name: data.name,
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
      */
    }
  },
  props: [
    'title',
    'fromPage',
  ]
}
</script>