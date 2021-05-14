<template>
  <div class="vendehumos">
    <h4>{{nombreCompleto}}</h4>
    <p>{{vendehumos.tema}}</p>
    <p>Visto en:</p>
    <ul>
      <li v-for="rrss in vendehumos.rrss" :key="rrss">{{rrss}}</li>
    </ul>
    <div>
      <button @click="votar(-1)">-</button>
      <span>Votos: {{vendehumos.numVotos}}</span>
      <button @click="votar(1)">+</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    vendehumos: {
      type: Object,
      required: true
    }
  },
  computed: {
    nombreCompleto() {
      return `${this.vendehumos.nombre} ${this.vendehumos.apellidos}`
    }
  },
  methods: {
    ...mapActions(['votarVendehumos']),
    votar(voto) {
      this.votarVendehumos({id: this.vendehumos.id, voto: voto});
    }
  }
}
</script>

<style scoped>
  .vendehumos {
    border: 1px solid black;
    box-shadow:  4px 5px 20px 0px black;
    width: 300px;
    margin: 20px;
    padding: 15px;
  }

  .vendehumos h4 {
    text-align: center;
  }
</style>