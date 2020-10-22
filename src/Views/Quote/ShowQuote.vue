<template>
  <div class="about">
    <nav class="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-itm-active" aria-current="page">Devis</li>
      </ol>
    </nav>
    <h1>Consultation des devis
      <button>
        <router-link class="fa fa-plus" aria-hidden="true" to="/devis/ajouter"/>
      </button>
    </h1>
    <v-app id="inspire">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"> N° du Devis</th>
              <th class="text-left"> Date Création du devis</th>
              <th class="text-left"> Commercial associé</th>
              <th class="text-left"> Nom du client</th>
              <th class="text-left"> Actions</th>
              <th class="text-left"></th>
              <th class="text-left"></th>
            </tr>
          </thead>
         <!-- <tbody v-if="devis.length >0">
            <tr v-for="devis in devis" :key="devis.number">
              <td>{{ devis.doc.number }}</td>
              <td>{{ devis.doc.dateCrea }}</td>
              <td>{{ devis.doc.commercial }}</td>
              <td></td>
              <td></td>
              <td>
                <router-link class="btn btn-primary" to="/devis/modifier">Modifier</router-link>
                <button type="button" >Modifier</button>
              </td>
            </tr>
          </tbody> -->
        </template>
      </v-simple-table>
      </v-app>  
  </div>
</template>
<script>
export default {
  
}
</script>
