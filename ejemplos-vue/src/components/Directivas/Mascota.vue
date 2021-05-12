<template>
  <div class="caja-mascota">
    <img :src="mascota.imagen" :alt="altImagen">
    <p>({{index}}): {{mascota.nombre}}</p>
    <!-- <img :src="imagen" alt="">
    <p>({{index}}): {{nombre}}</p> -->
  </div>
</template>

<script>
export default {
  props: {
    index: Number,
    // imagen: String,
    // nombre: String,
    mascota: Object
  },
  computed: {
    altImagen() {
      return 'Foto de ' + this.mascota.nombre;
    }
  }
}
</script>

<style scoped>
  .caja-mascota {
    text-align: center;
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
  }

  .caja-mascota img {
    width: 100%;
  }

  li::first-letter {
    text-transform: capitalize;
  }
</style>