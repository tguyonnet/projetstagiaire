import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import PouchDB from 'pouchdb'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

var db = new PouchDB('madera');
Vue.prototype.$db = db

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
