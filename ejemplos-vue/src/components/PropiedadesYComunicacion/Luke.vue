<template>
<div>
    <h3>Componente de {{nombre}}</h3>

    <input type="text" :value="nombre" @change="cambiarNombre">
  </div>
</template>

<script>
import EventBus from '../../utils/event-bus';

export default {
  props: ['nombre'],
  methods: {
    cambiarNombre(event) {
      EventBus.$emit('nombreCambiadoLuke', event.target.value);
    }
  }
}
</script>

<style>

</style>