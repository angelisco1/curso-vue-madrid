<template>
  <div>
    <label for="campo">
      <input :type="tipoCampo" id="campo">
      {{tipoCampo}}
    </label>

    <label for="radioText">
      <input
        type="radio"
        name="tipoCampo"
        id="radioText"
        value="text"
        @click="cambiarTipoCampo"
        :checked="tipoCampo === 'text'"
      >
      Text
    </label>

    <label for="radioNumber">
      <input
        type="radio"
        name="tipoCampo"
        id="radioNumber"
        value="number"
        @click="cambiarTipoCampo"
        :checked="tipoCampo === 'number'"
      >
      Number
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tipoCampo: 'text'
    }
  },
  methods: {
    cambiarTipoCampo(event) {
      // console.log(event)
      this.tipoCampo = event.target.value;
    }
  }
}
</script>

<style>

</style>