<template>
  <div>
    <h2>Data Binding</h2>
    <h3>String Interpolation</h3>
    <p>Me llamo {{nombre}}</p>

    <h3>Property Binding</h3>
    <input type="text" v-bind:value="nombre" placeholder="Sara" :style="{borderColor: nombre === 'Charly' ? 'greenyellow' : 'red', color: 'blue'}">
    <input type="text" :value="nombre" placeholder="Sara" @input="cambiarNombre" :class="{letraAzul: true, 'borde-verde': nombre === 'Charly', 'borde-rojo': nombre !== 'Charly'}">

    <h3>Event Binding</h3>
    <button type="button" v-on:click="resetearNombre">Resetear nombre</button>
    <button type="button" @click="resetearNombre">Resetear nombre</button>

    <h3>Two-Way Binding</h3>
    <input type="text" v-model="nombre">

    <h3>Ejercicio</h3>
    <configurador-campos></configurador-campos>
  </div>
</template>

<script>
import ConfiguradorCampos from './ConfiguradorCampos'

export default {
  components: {
    'configurador-campos': ConfiguradorCampos
  },
  data() {
    return {
      nombre: 'Charly',
    }
  },
  methods: {
    resetearNombre() {
      this.nombre = '';
    },
    cambiarNombre(event) {
      this.nombre = event.target.value;
    }
  }
}
</script>

<style scoped>
  h2 {
    text-decoration: underline;
  }

  .letraAzul {
    color: blue;
  }

  .borde-rojo {
    border-color: red;
  }

  .borde-verde {
    border-color: yellowgreen;
  }
</style>