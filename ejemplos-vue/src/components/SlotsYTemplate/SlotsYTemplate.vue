<template>
  <div>
    <h2>Template</h2>
    <!-- <h3 v-if="noticia">{{noticia.titulo}}</h3>
    <p v-if="noticia">{{noticia.contenido}}</p> -->
    <template v-if="noticia">
      <h3>{{noticia.titulo}}</h3>
      <p>{{noticia.contenido}}</p>
    </template>

    <h2>Slots</h2>
    <!-- <acordeon titulo="Ingredientes:">
      <ul>
        <li>Tomates</li>
        <li>Cebollas</li>
        <li>Patatas</li>
      </ul>
    </acordeon>
    <acordeon titulo="Lorem Ipsum">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi enim eveniet possimus sapiente provident nesciunt hic ex reprehenderit voluptates. Reprehenderit facilis, temporibus libero explicabo iste harum corporis quidem laudantium!</p>
    </acordeon> -->
    <acordeon>
      <template v-slot:content>
        <ul>
          <li>Tomates</li>
          <li>Cebollas</li>
          <li>Patatas</li>
        </ul>
      </template>
    </acordeon>
    <acordeon>
      <template v-slot:title>
        <h3>Ingredientes:</h3>
      </template>
      <template v-slot:content>
        <ul>
          <li>Tomates</li>
          <li>Cebollas</li>
          <li>Patatas</li>
        </ul>
      </template>
    </acordeon>
    <acordeon>
      <template v-slot:title>
        <p>Lorem Ipsum</p>
      </template>
      <template v-slot:content>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi enim eveniet possimus sapiente provident nesciunt hic ex reprehenderit voluptates. Reprehenderit facilis, temporibus libero explicabo iste harum corporis quidem laudantium!</p>
      </template>
    </acordeon>
  </div>
</template>

<script>
import Acordeon from './Acordeon'

export default {
  components: {
    'acordeon': Acordeon
  },
  data() {
    return {
      noticia: null
    }
  },
  created() {
    setTimeout(() => {
      this.noticia = {
        titulo: 'Descubren que el caballo blanco de Santiago era blanco',
        contenido: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut modi enim eveniet possimus sapiente provident nesciunt hic ex reprehenderit voluptates. Reprehenderit facilis, temporibus libero explicabo iste harum corporis quidem laudantium!'
      }
    }, 10000)
  }
}
</script>

<style>

</style>