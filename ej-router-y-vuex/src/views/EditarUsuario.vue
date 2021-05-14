<template>
  <div>
    <h3>Editar usuario</h3>
    <p>Datos guardados?: {{datosGuardados}}</p>
    <button type="button" @click="guardar">Guardar datos</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datosGuardados: false
    }
  },
  methods: {
    guardar() {
      // Petición para guardar los datos
      this.datosGuardados = !this.datosGuardados
    }
  },
  beforeRouteLeave(to, from, next) {
    // Se podría cambiar el operador ternario por un OR -> datosGuardados || confirm
    const puedoSalir = this.datosGuardados ? true : confirm('Seguro que quieres salir?? Perderás los datos que no has guardado...');
    next(puedoSalir)
  }
}
</script>

<style>

</style>