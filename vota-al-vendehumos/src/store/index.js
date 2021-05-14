import { createStore } from 'vuex'
// import { getVendehumos, createVendehumos } from '../services/vendehumos';
import * as VendehumosService from '../services/vendehumos';

export default createStore({
  state: {
    listaVendehumos: [],
  },
  getters: {
    listaVendehumos(state) {
      return state.listaVendehumos;
    }
  },
  mutations: {
    initDatos(state, payload) {
      state.listaVendehumos = payload;
    },
    crearVendehumos(state, payload) {
      state.listaVendehumos = [...state.listaVendehumos, payload];
    },
    votarVendehumos(state, payload) {
      state.listaVendehumos = state.listaVendehumos.map(v => {
        if (v.id === payload.id) {
          return payload;
        }
        return v;
      })
    }
  },
  actions: {
    async initDatos(context) {
      const lista = await VendehumosService.getVendehumos();
      console.log({lista})
      context.commit('initDatos', lista)
    },
    async crearVendehumos(context, payload) {
      const idVendehumosCreado = await VendehumosService.createVendehumos(payload)
      const vendehumosCreado = {...payload, id: idVendehumosCreado};
      context.commit('crearVendehumos', vendehumosCreado);
    },
    async votarVendehumos(context, payload) {
      const vendehumosActualizado = await VendehumosService.votarVendehumos(payload.id, payload.voto);
      context.commit('votarVendehumos', vendehumosActualizado)
    }
  },
  modules: {
  }
})
