import Vue from 'vue'   
import Router from 'vue-router'
//pages accueil + 404
import Home from './Views/Home.vue'
import NotFound from './Views/NotFound.vue'
//pages client
import AddCustomer from './Views/Customer/AddCustomer.vue'
import EditCustomer from './Views/Customer/EditCustomer.vue'
import ShowCustomer from './Views/Customer/ShowCustomer.vue'
//pages devis
import AddQuote from './Views/Quote/AddQuote.vue'
import EditQuote from './Views/Quote/EditQuote.vue'
import ShowQuote from './Views/Quote/ShowQuote.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/clients',
      name: 'ShowCustomer',
      component: ShowCustomer
    },
    {
      path: '/client/ajouter',
      name: 'AddCustomer',
      component: AddCustomer
    },
    {
      path: '/client/modifier/:key',
      name: 'EditCustomer',
      component: EditCustomer
    },
    {
      path: '/devis',
      name: 'ShowQuote',
      component: ShowQuote 
    },
    {
      path: '/devis/modifier',
      name: 'EditQuote',
      component: EditQuote
    },
    {
      path: '/devis/ajouter',
      name: 'AddQuote',
      component: AddQuote
    }
  ]
})