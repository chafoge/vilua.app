import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    action: {
      section: null,
      params: null,
    },
    translations:{
      ELEVATOR: 'Fahrstuhl',
      ESCALATOR: 'Rolltreppe',
      ACTIVE: 'aktiv',
      INACTIVE: 'inaktiv'
    }
  },
  mutations: {
    //  state helper for non static states
    action(state, data){
      if(typeof data !== 'object' || !('section' in data) || !('params' in data)) {
        // eslint-disable-next-line
        console.log('required params missing section or params')
      }
      state.action = data
    }
  },
  getters:{
    action(state){
      return state.action
    }
  },
  actions: {

  }
})
