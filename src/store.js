import Vue from 'vue'
import Vuex from 'vuex'
import { analyticsMiddleware } from 'vue-analytics'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    counter: state => state.counter
  },
  actions: {
    trackBooking ({ commit, state }) {
      commit('trackBooking', {
        amount: state.counter + 1,
        meta: {
          analytics: [
            ['event', {
              eventCategory: 'register',
              eventAction: 'booking',
              eventLabel: 'user-register'
            }],
            ['event', {
              eventCategory: 'register-userAgent',
              eventAction: 'userAgent',
              eventLabel: 'ios'
            }]
          ]
        }
      })
    }
  },
  mutations: {
    trackBooking (state, { amount }) {
      state.counter = amount
    }
  },
  plugins: [
    analyticsMiddleware
  ]
})
