<template>
  <div>
    <h2>Top Vendehumos 2021</h2>
    <p>Aquí va la lista</p>
    <vendehumos
      v-for="vendehumos in listaVendehumos"
      :key="vendehumos.id"
      :vendehumos="vendehumos"
    ></vendehumos>
  </div>
</template>

<script>
import Vendehumos from './Vendehumos'

export default {
  components: {
    'vendehumos': Vendehumos
  },
  props: {
    listaVendehumos: {
      type: Array,
      default: [
        {
          id: 1,
          nombre: 'Vendehumos',
          apellidos: 'Numero 1',
          tema: 'criptomonedas',
          rrss: ['youtube', 'instagram'],
          numVotos: 28
        }
      ]
    }
  }
}
</script>

<style>

</style>