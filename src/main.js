import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import PouchDB from 'pouchdb'

Vue.config.productionTip = false

var db = new PouchDB('madera');
Vue.prototype.$db = db

new Vue({
  router,
  render: h => h(App),
  data: {
    // db: db,
  }
}).$mount('#app')
