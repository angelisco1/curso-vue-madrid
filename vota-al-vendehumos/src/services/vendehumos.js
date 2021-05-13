import axios from 'axios';

// https://ejemplos-dc1c1.firebaseio.com/vue/<nombre>/vendehumos.json
const URL = 'https://ejemplos-dc1c1.firebaseio.com/vue/angel/vendehumos';

export const createVendehumos = (nuevoVendehumos) => {
  return axios.post(URL+'.json', JSON.stringify(nuevoVendehumos));
}
