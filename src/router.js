import Vue from 'vue'   
import Router from 'vue-router'
import Clients from './Views/Clients.vue'
import DevisShow from './Views/DevisShow.vue'
import DevisEdit from './Views/DevisEdit.vue'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/devisshow',
      name: 'devisshow',
      component: DevisShow 
    },
    {
      path: '/devisedit',
      name: '/devisedit',
      component: DevisEdit
    }
  ]
})