<template>
  <div>
    <h2>Home</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        <router-link :to="`/usuarios/${usuario.id}`">{{usuario.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: []
    }
  },
  // created() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(resp => resp.json())
  //     .then(data => this.usuarios = data)
  // },
  async created() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    this.usuarios = data;
  }
}
</script>

<style>

</style>
