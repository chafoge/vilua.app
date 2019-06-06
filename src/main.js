import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false

//  Normalerweise würde ich den api key in einer .env sichern
const db_api_key ='c46c116bce924994747f3192b117c213'

Vue.prototype.$http = axios.create({
  baseURL: 'https://api.deutschebahn.com/',
  headers:{
    Authorization: `Bearer ${db_api_key}`
  }
})

Vue.prototype.$transl = (string) => {
  if(string in store.state.translations) {
    return store.state.translations[string]
  }
  return string
}

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
