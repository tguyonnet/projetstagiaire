<template>
  <div id="app">

     <div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>MADERA</h3>
            </div>

            <ul class="list-unstyled components">
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
             <router-view/> 
        </div>
    </div>
    <!--Navbar-->
   <!-- <nav class="navbar navbar-light navbar-dark bg-primary">
  
      <a class="navbar-toggler btn-outline-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation" ><span class="navbar-toggler-icon"></span></a>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
            </nav>
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent15">
      
        <ul class="navbar-nav mr-auto bg-primary col-2">
          <li class="nav-item active">   	
          </li>
          <li class="nav-item">
            <router-link to="/clients" class="nav-link dropdown float-left ml-3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Consulter les clients</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/devisshow" class="nav-link dropdown float-left ml-3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Consulter les devis</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/devisedit" class="nav-link dropdown float-left ml-3" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Créer un devis</router-link>
          </li>
        </ul>
    
      </div>-->

 


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
