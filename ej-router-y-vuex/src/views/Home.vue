<template>
  <div>
    <h2>Home</h2>
    <ul>
      <!-- <li v-for="usuario in usuarios" :key="usuario.id"> -->
      <li v-for="usuario in usuariosFiltrados" :key="usuario.id">
        <router-link :to="{ name: 'info-usuario', params: {id: usuario.id} }">{{usuario.name}}</router-link> |
        <router-link :to="{ name: 'editar-usuario', params: {id: usuario.id} }">Editar</router-link>
        <!-- <router-link :to="`/usuarios/${usuario.id}`">{{usuario.name}}</router-link> |
        <router-link :to="`/usuarios/editar/${usuario.id}`">Editar</router-link> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { getUsuarios } from '../services/usuarios'

export default {
  data() {
    return {
      usuarios: [],
      filtro: ''
    }
  },
  computed: {
    usuariosFiltrados() {
      if (!this.filtro) {
        return this.usuarios;
      }
      return this.usuarios.filter((usuario) => {
        return usuario.name.includes(this.filtro);
      })
    }
  },
  // created() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(resp => resp.json())
  //     .then(data => this.usuarios = data)
  //   getUsuarios()
  //     .then(data => this.usuario = data)
  // },
  async created() {
    this.usuarios = await getUsuarios();
    this.filtro = this.$route.query.filtro;
  }
}
</script>

<style>

</style>
