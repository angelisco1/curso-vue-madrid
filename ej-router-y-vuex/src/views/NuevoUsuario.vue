<template>
  <div>
    <h2>Nuevo usuario</h2>
    <button type="button" @click="guardar">Crear</button>
  </div>
</template>

<script>
export default {
  methods: {
    guardar() {
      // POST con los datos
      // Obtenemos la respuesta OK
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>