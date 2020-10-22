import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import PouchDB from 'pouchdb'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

//PUCHDB
var db = new PouchDB('madera');
Vue.prototype.$db = db
var remoteCouch = 'https://apikey-69bcda5d6c17493f9ec349fa46f40c94:2565427be305db84eb986983bc4cfc5cee866370@28bca146-7c07-46d2-b259-679296a4cb7c-bluemix.cloudant.com/madera';

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
  db.replicate.to(remoteCouch, opts, syncError);
  db.replicate.from(remoteCouch, opts, syncError);
}

// There was some form or error syncing
function syncError() {
}

if (remoteCouch) {
  sync();
}



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
