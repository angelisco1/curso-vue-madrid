<template>
  <div>
    <h1>Curso de Vue</h1>
    <!-- <componente-local /> -->
    <cmp-local></cmp-local>
    <cmp-global></cmp-global>
    <datos-y-metodos></datos-y-metodos>
    <data-binding></data-binding>
  </div>
</template>

<script>
import ComponenteLocal from './components/ComponenteLocal';
import DatosYMetodos from './components/DatosYMetodos';
import DataBinding from './components/DataBinding/DataBinding';

export default {
  components: {
    'cmp-local': ComponenteLocal,
    'datos-y-metodos': DatosYMetodos,
    'data-binding': DataBinding,
  },
}

// h(
//   'div',
//   null,
//   h('h1', null, 'Curso de Vue'),
//   h('h2', null, 'Esto es un componente local')
//   h('h2', null, 'Esto es un componente global')
// )
</script>

<style>

</style>