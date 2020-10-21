import Vue from 'vue'   
import Router from 'vue-router'
import ShowClients from './Views/Customer/ShowCustomer.vue'
import AddCustomer from './Views/Customer/AddCustomer.vue'
import EditCustomer from './Views/Customer/EditCustomer.vue'
import ShowQuote from './Views/Quote/ShowQuote.vue'
import EditQuote from './Views/Quote/EditQuote.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home'
    },
    {
      path: '/clients',
      name: 'ShowClients',
      component: ShowClients
    },
    {
      path: '/client/add',
      name: 'AddCustomer',
      component: AddCustomer
    },
    {
      path: '/client/edit',
      name: 'EditCustomer',
      component: EditCustomer
    },
    {
      path: '/devis',
      name: 'ShowQuote',
      component: ShowQuote 
    },
    {
      path: '/devis/edit',
      name: 'EditQuote',
      component: EditQuote
    },
    {
      path: '/devis/add',
      name: 'AddQuote',
      component: EditQuote
    }
  ]
})