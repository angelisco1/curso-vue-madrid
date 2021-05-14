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
import { getUsuarioById } from '../services/usuarios';

export default {
  data() {
    return {
      idUsuario: this.$route.params.id,
      info: null
    }
  },
  watch: {
    async '$route'(ruta) {
      const idUsuario = ruta.params.id;
      this.idUsuario = idUsuario;
      this.info = await getUsuarioById(idUsuario);
    }
  },
  async created() {
    this.info = await getUsuarioById(this.$route.params.id)
  },
  beforeRouteEnter(to, from, next) {
    const puedeEntrar = '343r34' === localStorage.getItem('token');
    next(puedeEntrar);
  },
  beforeRouteUpdate(to, from, next) {
    const puedeEntrar = '343r34' === localStorage.getItem('token');
    next(puedeEntrar);
  }
}
</script>

<style>

</style>