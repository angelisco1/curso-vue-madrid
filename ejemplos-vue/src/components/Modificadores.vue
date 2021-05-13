<template>
  <div>
    <h2>Modificadores</h2>
    <p>Los modificadores de v-model (trim y number) están en el componente de Formularios</p>

    <div id="caja-fuera">
      <div id="caja-dentro"></div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  #caja-fuera {
    width: 300px;
    height: 300px;
    border: 1px solid black;
    background-color: orange;
  }

  #caja-dentro {
    width: 150px;
    height: 150px;
    border: 1px solid black;
    background-color: blue;
  }
</style>