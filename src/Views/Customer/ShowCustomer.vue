<template>
  <div class="container my-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{name:'Home'}"><i class="fa fa-home"></i></router-link></li>
        <li class="breadcrumb-item active" aria-current="page">Clients</li>
      </ol>
    </nav>
    <h1>
      Clients 
      <button>
          <router-link :to="{name:'AddCustomer'}" class="fa fa-plus" aria-haspopup="true"></router-link>
      </button>
    </h1>
    <form class="form-inline my-2 my-lg-0" style="place-content:center">
      <input v-model="valueSearch" class="form-cotrol mr-sm-2" type="text" placeholder="Recherche..">
      <button @click="search()" class="btn btn-outline-success my-2 my-sm-0" type="submit" >Rechercher</button>
    </form>
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
              <tr v-for="customer in customersFilter" :key="customer.name">
                <td>{{ customer.value.name }}</td>
                <td>{{ customer.value.firstName }}</td>
                <td>{{ customer.value.address }}</td>
                <td>{{ customer.value.postCode }}</td>
                <td>{{ customer.value.city }}</td>
                <td>{{ customer.value.email }}</td>
                <td>{{ customer.value.phone }}</td>
                <td>         
                  <router-link class="btn btn-primary" style="color: #fff!important" :to="{name:'EditCustomer', params:{id: customer.value._id}}">Modifier</router-link>
                  <router-link class="btn btn-secondary" style="color: #fff!important" :to="{name:'AddQuote', params:{id: customer.value._id}}">Créer devis</router-link>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-app> 
  </div>
</template>

<script>
import myMixin from '../../mixins.js'

export default {
  name: 'ShowCustomer',
  mixins: [myMixin],
}
</script>
