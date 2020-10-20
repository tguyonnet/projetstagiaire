<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
     <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
     <a class="navbar-brand" href="#">MADERA</a>
      <button class="btn btn-outline-dark btn-lg float-right" type="submit">Compte</button>
 </nav>

     <div id="nav">
      <router-link to="/">Accueil</router-link>
       | 
      <router-link to="/clients">Clients</router-link>
       | 
      <router-link to="/devisshow">DevisShow</router-link>
       | 
      <router-link to="/devisedit">DevisEdit</router-link>
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
  margin-top: 60px;
}
</style>
