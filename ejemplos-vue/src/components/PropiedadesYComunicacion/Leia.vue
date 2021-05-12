<template>
  <div>
    <h3>Componente de {{nombre}}</h3>

    <input type="text" :value="nombre" @change="cambiarNombre">
  </div>
</template>

<script>
export default {
  props: ['nombre'],
  methods: {
    cambiarNombre(event) {
      // console.log(event.target.value)
      // this.nombre = event.target.value;
      this.$emit('nombreCambiado', event.target.value);
    }
  }
}
</script>

<style>

</style>