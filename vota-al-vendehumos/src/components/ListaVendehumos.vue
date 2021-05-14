<template>
  <div>
    <template v-if="listaVendehumos.length > 0">
      <vendehumos
        v-for="vendehumos in listaVendehumos"
        :key="vendehumos.id"
        :vendehumos="vendehumos"
      ></vendehumos>
    </template>
    <p v-else>Humo no detectado :)</p>
  </div>
</template>

<script>
import Vendehumos from './Vendehumos'

export default {
  components: {
    'vendehumos': Vendehumos
  },
  props: {
    listaVendehumos: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>