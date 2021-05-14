import { createStore } from 'vuex'

export default createStore({
  state: {
    cuenta: 10,
  },
  getters: {
    cuenta(state) {
      return state.cuenta;
    }
  },
  mutations: {
    incrementar(state, payload) {
      // console.log(payload);
      state.cuenta += 1;
    },
    decrementar(state) {
      state.cuenta -= 1;
    },
    resetear(state) {
      state.cuenta = 0;
    }
  },
  actions: {
    resetearCuenta(context, payload) {
      setTimeout(() => {
        context.commit('resetear')
      }, 2000)
    }
  },
  modules: {
  }
})
