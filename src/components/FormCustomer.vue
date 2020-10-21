<template>
  <div class="container">
    <v-app id="inspire">
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col md="6">
              <v-text-field v-model="dataForm.name" label="Nom" required></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="dataForm.firstName" label="Prénom" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="5">
              <v-text-field v-model="dataForm.address" label="Adresse" required></v-text-field>
            </v-col>
            <v-col md="4">
              <v-text-field v-model="dataForm.city" label="Ville" required></v-text-field>
            </v-col>
            <v-col md="3">
              <v-text-field v-model="dataForm.postCode" label="Code postal" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6">
              <v-text-field v-model="dataForm.email" :rules="emailRules" label="E-mail" required></v-text-field>
            </v-col>
            <v-col md="6">
              <v-text-field v-model="dataForm.phone" :rules="phoneRules" label="Téléphone" required></v-text-field>
            </v-col>

          </v-row>
          <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>
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
            valid: false,
            dataForm: {
                name: '',
                firstName: '',
                address: '',
                city: '',
                postCode: '',
                email: '',
                phone: '',
            }
        }
    },
}
</script>