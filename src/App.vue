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
                <li>
                   <router-link to="/" class="nav-link dropdown " data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">Accueil</router-link>
                </li>   
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Edition Devis</a>
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
                <li class="active">
                  <router-link to="/clients" class="nav-link dropdown active" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Consulter les clients</router-link>
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
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fas fa-align-justify"></i>
                </button>
                <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>   
              </div>
            </nav> 
            <router-view/> <!-- Affichage des views appelées-->
        </div>  
      </div>

      <!-- Footer -->
<footer class="page-footer font-small">

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3" id=footfoot>© 2020 Copyright:
    <a href="#">CESI Groupe 3 PFR</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->
  </div>

  
</template>


<script>
export default {
  name: 'App',
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
