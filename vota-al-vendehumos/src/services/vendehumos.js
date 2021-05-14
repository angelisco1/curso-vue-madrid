import axios from 'axios';

// https://ejemplos-dc1c1.firebaseio.com/vue/<nombre>/vendehumos.json
// const URL = 'https://ejemplos-dc1c1.firebaseio.com/vue/angel/vendehumos';
const URL = 'http://localhost:3000/vendehumos';
// const headers = {
//   'Access-Control-Allow-Origin': '*'
// }

export const getVendehumos = async () => {
  const resp = await axios.get(URL);
  const lista = [];
  const datos = resp.data.data;

  for (let id in datos) {
    lista.push({id: id, ...datos[id]})
  }

  return lista;
}


export const createVendehumos = async (nuevoVendehumos) => {
  const resp = await axios.post(URL, nuevoVendehumos);
  return resp.data.data;
}

export const votarVendehumos = async (idVendehumos, voto) => {
  const resp = await axios.patch(`${URL}/${idVendehumos}`, {numVotos: voto});
  return {...resp.data.data, id: idVendehumos};
}
