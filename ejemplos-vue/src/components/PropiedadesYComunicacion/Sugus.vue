<template>
  <div id="sugus" :style="{backgroundColor: color}">
    {{sabor}}
  </div>
</template>

<script>
export default {
  // props: ['sabor', 'color'],
  props: {
    sabor: {
      type: String,
      required: true,
      // default: 'Limón',
      validator(val) {
        return ['naranja', 'limón', 'piña', 'fresa'].includes(val.toLowerCase());
      }
    },
    color: {
      type: String,
      required: true,
      validator: (val) => {
        return ['orange', 'yellow', 'blue', 'red'].includes(val);
      }
    }
  },
}
</script>

<style scoped>
  #sugus {
    width: 100px;
    height: 100px;
  }
</style>