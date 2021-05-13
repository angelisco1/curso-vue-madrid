<template>
  <div>
    <h3>Información de {{idUsuario}}</h3>
    <template v-if="info">
      <p>Nombre: {{info.name}}</p>
      <p>Email: {{info.email}}</p>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idUsuario: this.$route.params.id,
      info: null
    }
  },
  async created() {
    const resp = await fetch(
      'https://jsonplaceholder.typicode.com/users/' + this.$route.params.id
    );
    const data = await resp.json();
    this.info = data;
  }
    // '$route'() {
    // }
}
</script>

<style>

</style>