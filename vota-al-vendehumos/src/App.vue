<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div>
    <h1>Vota al vendehumos</h1>
    <formulario></formulario>
    <hr>
    <lista-vendehumos></lista-vendehumos>
  </div>
</template>

<script>
import Formulario from './components/Formulario'
import ListaVendehumos from './components/ListaVendehumos.vue'

export default {
  components: {
    'formulario': Formulario,
    'lista-vendehumos': ListaVendehumos
  }
}
</script>

<style>

</style>
