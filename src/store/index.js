import { createStore } from 'vuex'

export default createStore({
  state: {
    pacientes: []
  },
  mutations: {
    setPaciente(state, payload) {
      state.pacientes = payload;
      console.log(state.pacientes)
    }
  },
  actions: {
    async fetchData({commit}){
      try{
        const res = await fetch('pacientes.json')
        const data = await res.json()
        commit('setPaciente', data)
      }catch (error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
