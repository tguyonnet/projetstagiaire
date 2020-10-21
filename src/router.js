import Vue from 'vue'   
import Router from 'vue-router'
import ShowClients from './Views/Customer/ShowCustomer.vue'
import AddClients from './Views/Customer/AddCustomer.vue'
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
      name: 'ShowClients',
      component: ShowClients
    },
    {
      path: '/clients/add',
      name: 'AddClients',
      component: AddClients
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