<template>
  <div>
    <h1>Vota al vendehumos</h1>
    <div>
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'crear-vendehumos' }">Crear Vendehumos</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('initDatos');
  }
}
</script>

<style>

</style>
