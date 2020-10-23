<template>
  <div id="app">
     <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar" v-bind:class="{ active: isActive }">
            <div class="sidebar-header">
                <h3> <router-link :to="{name:'Home'}" class="nav-link dropdown " data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">MADERA</router-link></h3>
            </div>
            <ul class="list-unstyled components">
              <li>
                <router-link :to="{name:'Home'}" class="nav-link dropdown" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Accueil</router-link>
              </li>   
              <li>    
                <a data-toggle="collapse" role="button" aria-expanded="false" class="dropdown-toggle" v-on:click="dropdown = !dropdown">Devis</a>
                <ul class="list-unstyled" id="homeSubmenu" v-bind:class="{collapse: dropdown}">
                  <li>
                    <router-link :to="{name:'AddQuote', params:{id: null}}" class="nav-link dropdown" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Créer</router-link>
                  </li>
                  <li>
                    <router-link :to="{name:'ShowQuote'}" class="nav-link dropdown" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Consulter</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link :to="{name:'ShowCustomer'}" class="nav-link dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Clients</router-link>
              </li>          
            </ul>              
        </nav>
        <!-- Page Content  -->
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info" v-on:click="isActive = !isActive">
                  <i class="fas fa-align-left"></i>
                </button>
              </div>
            </nav> 
            <router-view/> <!-- Affichage des vues appelées dans le menu-->
            <footer class="page-footer font-small">
              <div class="footer-copyright text-center py-3" id=footfoot>© 2020 Copyright: CESI Groupe 3 PFR
              </div>
            </footer>
        </div>  
      </div>
    </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      isActive: false,
      dropdown: true
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
