import axios from 'axios';

// https://ejemplos-dc1c1.firebaseio.com/vue/<nombre>/vendehumos.json
// const URL = 'https://ejemplos-dc1c1.firebaseio.com/vue/angel/vendehumos';
const URL = 'http://localhost:3000/vendehumos';
const headers = {
  'Access-Control-Allow-Origin': '*'
}

export const createVendehumos = (nuevoVendehumos) => {
  return axios.post(URL, JSON.stringify(nuevoVendehumos), { headers });
}
