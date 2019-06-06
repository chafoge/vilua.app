import Vue from 'vue'
import Router from 'vue-router'
import search from './views/search.vue'
import station from './views/station.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: search
    },
    {
      path: '/:staNum',
      name: 'station',
      component: station
    }
  ]
})
