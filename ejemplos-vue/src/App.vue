<template>
  <div>
    <h1 v-marcar="{bgColor: 'red', color: 'yellow'}">Curso de Vue</h1>
    <!-- <componente-local /> -->
    <!-- <cmp-local></cmp-local> -->
    <!-- <cmp-global></cmp-global> -->
    <!-- <datos-y-metodos></datos-y-metodos> -->
    <!-- <data-binding></data-binding> -->
    <!-- <directivas></directivas> -->
    <!-- <computed-y-watchers></computed-y-watchers> -->
    <!-- <propiedades-y-comunicacion></propiedades-y-comunicacion> -->
    <!-- <slots-y-template></slots-y-template> -->
    <formularios></formularios>
  </div>
</template>

<script>
import ComponenteLocal from './components/ComponenteLocal';
import DatosYMetodos from './components/DatosYMetodos';
import DataBinding from './components/DataBinding/DataBinding';
import Directivas from './components/Directivas/Directivas';
import ComputedYWatchers from './components/ComputedYWatchers';
import PropiedadesYComunicacion from './components/PropiedadesYComunicacion/PropiedadesYComunicacion';
import SlotsYTemplate from './components/SlotsYTemplate/SlotsYTemplate';
import Formularios from './components/Formularios/Formularios';

export default {
  components: {
    'cmp-local': ComponenteLocal,
    'datos-y-metodos': DatosYMetodos,
    'data-binding': DataBinding,
    'directivas': Directivas,
    'computed-y-watchers': ComputedYWatchers,
    'propiedades-y-comunicacion': PropiedadesYComunicacion,
    'slots-y-template': SlotsYTemplate,
    'formularios': Formularios
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