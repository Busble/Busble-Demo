import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import store from './store'
import VeeValidate from 'vee-validate'
import Parser from 'ua-parser-js'
// import firebase from 'firebase/app'
import firebase from 'firebase/app'
import 'firebase/database'

window.UaParser = new Parser()

Vue.config.productionTip = false

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  apiKey: "AIzaSyBwwtOj08xrVVhT5yhUHacor8Tn292jq-Q",
  authDomain: "busble.firebaseapp.com",
  databaseURL: "https://busble.firebaseio.com",
  projectId: "busble",
  storageBucket: "busble.appspot.com",
  messagingSenderId: "914645978067"
}

firebase.initializeApp(config)

window.Firebase = firebase

Vue.use(VueAnalytics, {
  id: 'UA-136034582-1',
  router,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: !isProduction,
    sendHitTask: isProduction
  }
})

Vue.use(VeeValidate)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
