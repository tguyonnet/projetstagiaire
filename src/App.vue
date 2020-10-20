<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
      <a class="navbar-brand" href="#">MADERA</a>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
              <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="text" placeholder="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
    </nav>

  <div class="row">
      <div class="col-2">
        <div class="nav flex-column nav-pills">
          <div class="nav-item dropdown">
             <router-link to="/" class="nav-link dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Accueil</router-link>
            <router-link to="/clients" class="nav-link dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Consulter les clients</router-link>
             <router-link to="/devisshow" class="nav-link dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Consulter les devis</router-link>
              <router-link to="/devisedit" class="nav-link dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Créer un devis</router-link>
          </div>
        </div>
      </div>
  </div>
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
