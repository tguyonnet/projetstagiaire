<template>
  <div class="container">
    <h1>Clients 
      <button>
          <router-link to="/clients/add" class="fa fa-plus" aria-haspopup="true"></router-link>

      </button>
    </h1>
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
            <tbody v-if="customers.length > 0">
              <tr v-for="customer in customers" :key="customer.name">
                <td>{{ customer.doc.name }}</td>
                <td>{{ customer.doc.firstName }}</td>
                <td>{{ customer.doc.address }}</td>
                <td>{{ customer.doc.postCode }}</td>
                <td>{{ customer.doc.city }}</td>
                <td>{{ customer.doc.email }}</td>
                <td>{{ customer.doc.phone }}</td>
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
  name: 'ShowCustomer',
  data() {
    //toutes les variables qu'on utilise dans le template
    return {  
      customers: [],
    }
  },
  //la méthode created() s'appelle toute seule quand on ouvre la page
  created() {
    let vm = this
    // permet de recupérer tous les documents "client"
    vm.$db.allDocs({
      include_docs: true,
      starkey: 'client_',
      endkey: 'client_\uFFFF'
    }).then(function(docs) {
      // console.log(docs.rows)
      vm.customers = docs.rows
    });
  },
}
</script>