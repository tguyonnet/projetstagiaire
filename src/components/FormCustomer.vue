<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div>
      <v-alert v-if="isFormValid" type="success">
        Le client a été ajouté !
      </v-alert>
    </div>
    <v-app id="inspire">
      <v-form v-model="valid" ref="formCustomer">
        <v-container>
          <v-row>
            <v-col md="6">
              <v-text-field v-model="dataForm.name" :rules="this.fieldRules('nom')" label="Nom"></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="dataForm.firstName" :rules="this.fieldRules('prénom')" label="Prénom"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="5">
              <v-text-field v-model="dataForm.address" :rules="this.fieldRules('adresse')" label="Adresse"></v-text-field>
            </v-col>
            <v-col md="4">
              <v-text-field v-model="dataForm.city" :rules="this.fieldRules('ville')" label="Ville"></v-text-field>
            </v-col>
            <v-col md="3">
              <v-text-field v-model="dataForm.postCode" :rules="this.fieldRules('code postal')" label="Code postal"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6">
              <v-text-field v-model="dataForm.email" :rules="this.fieldRules('e-mail')" label="E-mail"></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="dataForm.phone" :rules="this.fieldRules('téléphone')" label="Téléphone"></v-text-field>
            </v-col>
          </v-row>
          <v-btn v-if="fromPage == 'add'" :disabled="!valid" color="success" class="mr-4" @click="validate">Valider</v-btn>
          <v-btn v-if="fromPage == 'edit'" :disabled="!valid" color="warning" class="mr-4" @click="modifiate">Modifier</v-btn>
          <v-btn color="gray" class="mr-4" @click="reset">Réinitialiser</v-btn>
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
      // les donées du form
      valid: true,
      isFormValid: false,
      dataForm: {
        key: '',
        name: '',
        firstName: '',
        address: '',
        city: '',
        postCode: '',
        email: '',
        phone: '',
      },
    }
  },
  created() {
    if (this.customerID != null) {
      //
    }
  },
  methods: {
    // les règles de tous les champs, fait en fonction pour que ce soit générique
    fieldRules(field) {
      let rules = []
      rules.push(v => !!v || 'Le champ ' + field + ' est obligatoire')
      if (field == 'code postal') {
        rules.push(v => (v && v.length == 5) || "Le code postal doit contenir 5 chiffres")
        rules.push(v => (v && !isNaN(v)) || "Vous ne pouvez renseigner que des chiffres")
      }
      if (field == 'e-mail') {
        rules.push(v => /.+@.+\..+/.test(v) || "L' e-mail n'est pas valide")
      }
      return rules
    },
    // quand on valide le formulaire
    validate () {
      if (this.valid) {
        this.$refs.formCustomer.validate()
        this.addCustomer(this.dataForm);
      }
    },
    reset () {
      this.$refs.formCustomer.reset()
      this.isFormValid = false
    },
    resetValidation () {
      this.$refs.formCustomer.resetValidation()
    },
    // on ajoute le client
    addCustomer(data) {
      // console.log(data)
      let vm = this
      data.key = this.shortid.generate()
      var customer = {
        _id: "client_" + data.name + "_" + data.postCode + "_" + data.key,
        key: data.key,
        name: data.name.toUpperCase(),
        firstName: data.firstName,
        address: data.address,
        postCode: data.postCode,
        city: data.city,
        email: data.email,
        phone: data.phone
      };
      // on envoie le client en BDD
      vm.$db.put(customer, function callback(err) {
        if (!err) {
          // console.log('Customer added!');
          vm.reset()
          vm.resetValidation()
          vm.isFormValid = true
        }
      });
    },
  },
  props: [
    'title',
    'fromPage',
    'customer'
  ]
}
</script>