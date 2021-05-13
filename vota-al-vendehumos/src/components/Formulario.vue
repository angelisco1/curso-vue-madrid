<template>
  <div>
    <h2>Formulario</h2>
    <form @submit.prevent="guardarVendehumos">
      <div>
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" name="nombre" v-model="nombre">
      </div>
      <div>
        <label for="apellidos">Apellidos</label>
        <input type="text" id="apellidos" name="apellidos" v-model="apellidos">
      </div>
      <div>
        <p>Tema:</p>
        <label for="cripto">
          <input type="radio" id="cripto" name="tema" value="criptomonedas" v-model="tema"> Criptomonedas
        </label>
        <label for="trading">
          <input type="radio" id="trading" name="tema" value="trading" v-model="tema"> Trading
        </label>
        <label for="apuestas">
          <input type="radio" id="apuestas" name="tema" value="apuestas" v-model="tema"> Apuestas
        </label>
      </div>
      <div>
        <p>Visto en:</p>
        <label for="youtube">
          <input type="checkbox" id="youtube" name="rrss" value="youtube" v-model="rrss"> Youtube
        </label>
        <label for="facebook">
          <input type="checkbox" id="facebook" name="rrss" value="facebook" v-model="rrss"> Facebook
        </label>
        <label for="instagram">
          <input type="checkbox" id="instagram" name="rrss" value="instagram" v-model="rrss"> Instagram
        </label>
        <label for="twitter">
          <input type="checkbox" id="twitter" name="rrss" value="twitter" v-model="rrss"> Twitter
        </label>
      </div>
      <button type="submit">Crear</button>
    </form>
  </div>
</template>

<script>
import { createVendehumos } from '../services/vendehumos';

export default {
  data() {
    return {
      nombre: '',
      apellidos: '',
      tema: '',
      rrss: []
    }
  },
  methods: {
    guardarVendehumos(event) {
      const nuevoVendehumos = this.$data;
      // Guardar datos
      createVendehumos(nuevoVendehumos)
        .then(resp => {
          console.log(resp);
        })
      // console.log(nuevoVendehumos)
      // Resetear los datos
    }
  }
}
</script>

<style>

</style>