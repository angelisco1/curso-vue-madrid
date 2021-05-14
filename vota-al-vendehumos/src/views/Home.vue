<template>
  <div class="home">
    <h2>Top Vendehumos 2021</h2>
    <lista-vendehumos :listaVendehumos="listaVendehumos"></lista-vendehumos>
  </div>
</template>

<script>
import ListaVendehumos from '../components/ListaVendehumos.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['listaVendehumos'])
  },
  components: {
    'lista-vendehumos': ListaVendehumos
  }
}
</script>
