<template>
  <div id="app">

     <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3> <router-link to="/" class="nav-link dropdown " data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">MADERA</router-link></h3>
            </div>

            <ul class="list-unstyled components">
              <li>
                <router-link to="/" class="nav-link dropdown " data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Accueil</router-link>
              </li>   
              <li> <!--class="active">-->       
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Devis</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <router-link to="/devisedit" class="nav-link dropdown" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Créer</router-link>
                  </li>
                  <li>
                    <router-link to="#" class="nav-link dropdown" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Modifier</router-link>
                  </li>
                  <li>
                    <router-link to="/devisshow" class="nav-link dropdown" data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Consulter</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/clients" class="nav-link dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Clients</router-link>
              </li>          
            </ul>              
        </nav>

        <!-- Page Content  -->
        <div id="content">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                  <i class="fas fa-align-left"></i>
                </button>
             
             
              </div>
            </nav> 
            <router-view/> <!-- Affichage des views appelées-->
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
  components: {
  },
  
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
