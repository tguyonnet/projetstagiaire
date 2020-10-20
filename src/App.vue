<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Menu/>
    <Clients/>
  </div>
</template>

<script>
import Clients from './components/Clients.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Clients
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
