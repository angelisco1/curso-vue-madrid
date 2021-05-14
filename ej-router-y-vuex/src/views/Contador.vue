<template>
  <div>
    <h2>Vuex - Contador</h2>
    <button type="button" @click="decrementar">-</button>
    <span>Cuenta: {{cuenta}}</span>
    <button type="button" @click="incrementar">+</button>
    <button type="button" @click="resetearCuenta">Resetear cuenta</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    // cuenta() {
    //   return this.$store.getters.cuenta;
    // }
    ...mapGetters(['cuenta'])
    // ...mapGetters({
    //   'cuenta': 'cuenta2'
    //   })
  },
  methods: {
    incrementar() {
      // MAL:
      // this.$store.state.cuenta++;
      this.$store.commit('incrementar');
    },
    ...mapMutations(['decrementar']),
    // resetearCuenta() {
    //   this.$store.dispatch('resetearCuenta');
    // },
    ...mapActions(['resetearCuenta'])
  }
}
</script>

<style>

</style>