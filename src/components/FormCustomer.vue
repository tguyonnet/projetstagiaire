<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <v-app id="inspire">
      <!-- <div v-if="errors.lenght > 0" class="alert alert-danger" role="alert">
        <div v-for="error in errors" :key="error">
          <strong>{{ error }}</strong>
        </div>
      </div> -->
      <v-form v-model="valid">
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
      errors: [],
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
  methods: {
    // les règles de tous les champs, fait en fonction pour que ce soit générique
    fieldRules(field) {
      let rules = []
      rules.push(v => !!v || 'Le champ ' + field + ' est obligatoire')
      if (field == 'Code postal') {
        rules.push(v => (v && v.length >= 5))
      }
      if (field == 'E-mail') {
        rules.push(v => /.+@.+\..+/.test(v) || "L' e-mail n'est pas valide")
      }
      return rules
    },
    // quand on valide le formulaire
    validate () {
      if (this.valid) {
        this.addCustomer(this.dataForm);
      }
    },
    // on ajoute le client
    addCustomer(data) {
      // console.log(data)
      data.key = this.shortid.generate()
      var customer = {
        _id: "client_" + data.name + "_" + data.postCode + "_" + data.key,
        key: data.key,
        name: data.name,
        firstName: data.firstName,
        address: data.address,
        postCode: data.postCode,
        city: data.city,
        email: data.email,
        phone: data.phone
      };
      // on envoiée le client en BDD
      this.$db.put(customer, function callback(err) {
        if (!err) {
          console.log('Customer added!');
        }
        else {
          this.errors.push(err)
        }
      });
    }
  },
  props: [
    'title',
    'fromPage',
  ]
}
</script>