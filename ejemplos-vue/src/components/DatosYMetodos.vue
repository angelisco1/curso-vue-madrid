<template>
  <div>
    <h2>Datos y Métodos</h2>
    <!-- Charly Falco: Hola, que tal? -->
    <p>{{autor}}: {{textoMensaje}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textoMensaje: 'Hola, que tal?',
      autor: 'Charly Falco'
    }
  },
  methods: {
    mostrarMensajeEnConsola() {
      console.log(this.textoMensaje);
    }
  }
  // data: {
  //   texto: 'sss'
  // }
}
</script>

<style>

</style>