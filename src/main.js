import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'
import store from './store'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

const isProduction = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id: 'UA-135766163-1',
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
