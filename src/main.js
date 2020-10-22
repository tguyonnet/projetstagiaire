import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import PouchDB from 'pouchdb'
import vuetify from './plugins/vuetify';
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';

Vue.use(Donut);

Vue.config.productionTip = false

//PUCHDB
const db = new PouchDB('madera');
Vue.prototype.$db = db;
const token = btoa('apikey-69bcda5d6c17493f9ec349fa46f40c94:2565427be305db84eb986983bc4cfc5cee866370');
Vue.prototype.$token = token;
const api = 'https://apikey-69bcda5d6c17493f9ec349fa46f40c94:2565427be305db84eb986983bc4cfc5cee866370@28bca146-7c07-46d2-b259-679296a4cb7c-bluemix.cloudant.com/madera';
Vue.prototype.$api = api;

//SHORTID
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
Vue.prototype.$shortid = shortid

// Initialise a sync with the remote server
function sync() {
  var opts = {live: true,
    filter: function(doc) {
      return doc._id.indexOf('_design') !== 0;
    }
  };
  db.replicate.to(api, opts);
  db.replicate.from(api, opts);
}

if (api) {
  sync();
}

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
