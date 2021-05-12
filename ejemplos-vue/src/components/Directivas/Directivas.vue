<template>
  <div>
    <h2>Directivas</h2>

    <h3>v-text</h3>
    <p>{{texto}}</p>
    <p v-text="texto"></p>

    <h3>v-html (cuidado con esta etiqueta: ejemplo si pulsas en Inicio)</h3>
    <p v-html="tituloPost"></p>
    <p v-html="enlaceInicio"></p>

    <h3>v-if/v-else-if/v-else</h3>
    <button type="button" v-if="estaLogueado" @click="toggleLogin">Logout</button>
    <button type="button" v-else @click="toggleLogin">Login</button>
    <p v-if="notaFinal >= 5">Aprobado</p>
    <p v-else-if="notaFinal === -1">No Presentado</p>
    <p v-else>Suspenso</p>

    <h3>v-show</h3>
    <p v-show="estaLogueado">{{estaLogueado ? 'Estoy logueado :)' : 'No estoy logueado :('}}</p>

    <h3>v-for</h3>

    <!-- <div v-for="(mascota, index) in mascotas" :key="mascota.id" class="caja-mascota">
      <img :src="mascota.imagen" alt="">
      <p>({{index}}): {{mascota.nombre}}</p>
    </div> -->

    <!-- <mascota
      v-for="(mascota, index) in mascotas"
      :key="mascota.id"
      :index="index"
      :imagen="mascota.imagen"
      :nombre="mascota.nombre"
    ></mascota> -->

    <mascota
      v-for="(mascota, index) in mascotas"
      :key="mascota.id"
      :index="index"
      :mascota="mascota"
    ></mascota>


    <!-- <div>
      <img src="mascotas[1].imagen" alt="">
      <p>{{mascotas[1].nombre}}</p>
    </div>
    <div>
      <img src="mascotas[2].imagen" alt="">
      <p>{{mascotas[2].nombre}}</p>
    </div> -->
    <div>
      <p>Información de contacto</p>
      <ul>
        <li v-for="(val, key, numIt) in persona" :key="numIt">{{key}}: {{val}}</li>
      </ul>
    </div>

    <ul>
      <li v-for="num in 3" :key="num">{{num}}</li>
    </ul>

    <h3>Mis directivas</h3>
    <p v-marcar="{bgColor: 'orange', color: 'white'}">Este párrafo es naranja</p>
    <span v-marcar.delayed="{bgColor: 'red', color: 'blue'}">Este párrafo es rojo</span>

    <img
      v-newbind:src="mascotas[1].imagen"
      v-newbind:alt="nombreMascota"
      v-newbind:title="nombreMascota"
    >

    <input type="text" v-model="nombreMascota">

  </div>
</template>

<script>
import Mascota from './Mascota';

export default {
  components: {
    'mascota': Mascota
  },
  data() {
    return {
      nombreMascota: 'Rocky',
      tituloPost: '<strong>Hola</strong> <em>mundo</em>!',
      enlaceInicio: '<a onclick="document.querySelector(\'h2\').innerHTML=\'Hackeado :)\'">Inicio</a>',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at, commodi perspiciatis neque recusandae aliquid facilis ratione quis tempore amet facere rem molestiae culpa, veniam magni molestias provident ea officiis?',
      estaLogueado: true,
      notaFinal: 6,
      mascotas: [
        { id: 0, nombre: 'Perico', imagen: 'https://lh3.googleusercontent.com/proxy/ixnPTVsnDz0OFV2KhcN8HNEQDk-13TFv13Z2hjNjkL5XCMdrBUmQbMRkassFt33ced2YyjDoFww_GpAYNe2HRh5Be0vZf9OBFGrBXic4quARUV4L7erzzBgl19-AAcRz4nlw5z4zcBDpSHH3bPvxr2X4zjGA1S0qA_zLkV6w' },
        { id: 1, nombre: 'Rocky', imagen: 'https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg?quality=100&strip=info' },
        { id: 2, nombre: 'Felix', imagen: 'https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg' },
      ],
      persona: {
        nombre: 'Charly',
        apellido: 'Falco',
        email: 'cfalco@gmail.com'
      }
    }
  },
  methods: {
    toggleLogin() {
      this.estaLogueado = !this.estaLogueado;
    }
  },
  directives: {
    newbind: {
      // <img v-newbind:src="la-url" v-newbind:alt="el texto alternativo" />
      // <input v-newbind:type="number" />
      mounted(el, binding) {
        const attr = binding.arg;
        el[attr] = binding.value;
      },
      updated(el, binding) {
        el[binding.arg] = binding.value;
      }
    },
    // Ponemos como directiva global -> marcar (mirar en el main.js)
    // marcar: {
    //   mounted(el, binding) {
    //     // console.dir(el)
    //     console.log(binding);
    //     // const color = binding.value.color;
    //     // const bgColor = binding.value.bgColor;
    //     const { bgColor: bgc, color } = binding.value;
    //     const delayed = binding.modifiers.delayed;

    //     el.addEventListener('mouseenter', () => {
    //       // const color = binding.value || 'white';
    //       let timeout = 0;
    //       if (delayed) {
    //         timeout = 1000;
    //       }
    //       setTimeout(() => {
    //         el.style.backgroundColor = bgc;
    //         el.style.color = color;
    //       }, timeout)
    //     })

    //     el.addEventListener('mouseout', () => {
    //       el.style.backgroundColor = 'white';
    //       el.style.color = 'black';
    //     })
    //   }
    // }
  }
}
</script>

<style scoped>
  /* Estos estilos los pasamos a Mascota.vue */
  /* .caja-mascota {
    text-align: center;
    width: 300px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
  }

  .caja-mascota img {
    width: 100%;
  }

  li::first-letter {
    text-transform: capitalize;
  } */
</style>