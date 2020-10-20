<template>
  <div class="container">
    <h1>Clients</h1>
    <v-app id="inspire">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left"> Name </th>
                <th class="text-left"> Prénom </th>
                <th class="text-left"> Adresse </th>
                <th class="text-left"> Code postal </th>
                <th class="text-left"> Ville </th>
                <th class="text-left"> Email </th>
                <th class="text-left"> Téléphone </th>
                <th class="text-center"> Actions </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="customer in customers" :key="customer.name">
                <td>{{ customer.name }}</td>
                <td>{{ customer.firstName }}</td>
                <td>{{ customer.address }}</td>
                <td>{{ customer.postCode }}</td>
                <td>{{ customer.city }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.phone }}</td>
                <td>         
                  <button type="button" class="btn btn-primary">Modifier</button>
                  <button type="button" class="btn btn-secondary">Créer devis</button>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-app> 
  </div>
</template>


<script>
export default {
  name: 'Clients',
  methods: {
    test: function() {
      console.log(this.$db)
    }
  },
  data () {
    return {
      customers: []
    }
  }
}
</script>