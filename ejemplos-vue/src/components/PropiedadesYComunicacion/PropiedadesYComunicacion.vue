<template>
  <div>
    <h2>Propiedades</h2>
    <!-- <sugus sabor="Naranja" color="orange"></sugus>
    <sugus sabor="Piña" color="blue"></sugus>
    <sugus sabor="Limón" color="yellow"></sugus> -->
    <!-- <sugus sabor="Melocotón" color="yellow"></sugus> -->
    <!-- <input type="number">
    <input type="text"> -->
    <sugus
      v-for="sugus in listaSugus"
      :key="sugus.id"
      :sabor="sugus.sabor"
      :color="sugus.color"
    ></sugus>

    <leia
      :nombre="nombreLeia"
      @nombreCambiado="cambiarNombreLeia"
    ></leia>

    <luke :nombre="nombreLuke"></luke>

  </div>
</template>

<script>
import Leia from './Leia.vue'
import Luke from './Luke.vue'
import Sugus from './Sugus'
import EventBus from '../../utils/event-bus';

export default {
  components: {
    'sugus': Sugus,
    'leia': Leia,
    'luke': Luke,
  },
  data() {
    return {
      nombreLuke: 'Luke Skywalker',
      nombreLeia: 'Leia Organa',
      listaSugus: [
        { id: 1283, sabor: 'Naranja', color: 'orange' },
        { id: 190, sabor: 'Piña', color: 'blue' },
        { id: 821, sabor: 'Limón', color: 'yellow' },
        { id: 23, sabor: 'Fresa', color: 'red' },
      ]
    }
  },
  methods: {
    cambiarNombreLeia(event) {
      console.log(event)
      this.nombreLeia = event;
    },
    // cambiarNombreLuke(event) {
    //   this.nombreLuke = event;
    // },
  },
  created() {
    EventBus.$on('nombreCambiadoLuke', (event) => {
      this.nombreLuke = event;
      // this.cambiarNombreLuke(event);
    })
    // EventBus.$on('nombreCambiadoLuke', this.cambiarNombreLuke)
  }
}
</script>

<style>

</style>