<template>
  <div id="app">
    <!--Navbar-->
    <nav class="navbar navbar-light navbar-dark bg-primary">
      <!-- Navbar brand -->
      <a class="navbar-toggler btn-outline-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent15"
        aria-controls="navbarSupportedContent15" aria-expanded="false" aria-label="Toggle navigation" ><span class="navbar-toggler-icon"></span></a>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
            </nav>
      <!-- Collapsible content -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent15">
        <!-- Links -->
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
        <!-- Links -->
      </div>
      <!-- Collapsible content -->
    <!--/.Navbar-->
    <router-view/>
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
