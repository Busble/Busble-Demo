import Vue from 'vue'
import App from './App.vue'
import router from './router'
const firebaseResource = require('firebase')

const config = {
  apiKey: "AIzaSyBwwtOj08xrVVhT5yhUHacor8Tn292jq-Q",
  authDomain: "busble.firebaseapp.com",
  databaseURL: "https://busble.firebaseio.com",
  projectId: "busble",
  storageBucket: "busble.appspot.com",
  messagingSenderId: "914645978067"
}

firebaseResource.initializeApp(config)

window.Firebase = firebaseResource

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
