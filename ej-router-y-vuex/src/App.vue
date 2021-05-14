<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/> -->
  <div>
    <h1>Router</h1>
    <!-- <a href="/">Inicio</a>
    <a href="/nuevo-usuario">Nuevo usuario</a> -->
    <router-link to="/">Home</router-link>
    <router-link to="/nuevo-usuario">Nuevo usuario</router-link>
    <router-link to="/ejemplo-vuex">Ejemplo Vuex</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style>

</style>
