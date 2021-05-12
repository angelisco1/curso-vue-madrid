<template>
  <div>
    <h2>Computed properties</h2>
    <p>Me llamo: {{nombre}} {{apellidos}}</p>
    <p>Me llamo: {{nombreCompleto}} - (computed)</p>
    <p>Me llamo: {{nombreCompleto2()}} - (methods)</p>
    <p>Me llamo: {{nombreCompleto3}} - (computed desestructurada)</p>
    <input type="text" v-model="nombre">
    <input type="text" v-model="apellidos">
    <input type="text" v-model.lazy="nombreCompleto3">
    <p>Edad: {{edad}}</p>
    <input type="number" v-model="edad">
    <hr>

    <p>Precio: {{precioConSimbolo}}</p>
    <input type="number" v-model="precio">
    <input type="radio" name="locale" value="es" @click="changeLocale" checked>ES
    <input type="radio" name="locale" value="fr" @click="changeLocale">FR
    <input type="radio" name="locale" value="en" @click="changeLocale">EN

    <h2>Watchers</h2>
    <div>
      <div>
        <input type="text" v-model="usuario">
        <span v-show="errores.usuario">Error: {{errores.usuario}}</span>
      </div>
      <div>
        <input type="number" v-model="edad">
        <span v-show="errores.edad">Error: {{errores.edad}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: 'Charly',
      apellidos: 'Falco',
      precio: 10.99,
      locale: 'es',
      usuario: '',
      edad: 0,
      errores: {
        usuario: null,
        edad: null,
      }
    }
  },
  computed: {
    nombreCompleto() {
      console.log('[COMPUTED] Pasa por la computed prop');
      return this.nombre + ' ' + this.apellidos;
    },
    nombreCompleto3: {
      get() {
        console.log('[COMPUTED GET] Pasa por la computed prop');
        return this.nombre + ' ' + this.apellidos;
      },
      set(newNombreCompleto) {
        console.log(newNombreCompleto)
        if (newNombreCompleto) {
          const segmentosNombreCompleto = newNombreCompleto.split(' ');
          const nombre = segmentosNombreCompleto.shift();
          const apellidos = segmentosNombreCompleto.join(' ');
          this.nombre = nombre;
          this.apellidos = apellidos;
        }
        // } else {
        //   this.nombre = '';
        //   this.apellidos = '';
        // }
      }
    },
    precioConSimbolo() {
      const simbolo = ['es', 'fr', 'po', 'it'].includes(this.locale) ? '€' : '$';
      return this.precio + simbolo;
    }
  },
  watch: {
    usuario(nuevoUsuario, usuarioAntiguo) {
      console.log('Ha cambiado el usuario...')
      const nombresCogidos = ['robb', 'tony', 'sansa', 'arya', 'rickon'];
      setTimeout(() => {
        if (nombresCogidos.includes(nuevoUsuario)) {
          this.errores.usuario = `El usuario ${nuevoUsuario} ya está en uso.`
          // this.errores.usuario = 'El usuario ' + nuevoUsuario + ' ya está en uso.'
        } else {
          this.errores.usuario = null;
        }
      }, 600);
    },
    edad(newVal, oldVal) {
      if (this.edad >= 16) {
        this.errores.edad = null;
      } else {
        this.errores.edad = 'Para utilizar <la aplicacion> tienes que tener + de 16 años.';
      }
    }
  },
  methods: {
    changeLocale(event) {
      this.locale = event.target.value;
    },
    nombreCompleto2() {
      console.log('[METHODS] Pasa por método');
      return this.nombre + ' ' + this.apellidos;
    }
  }
}
</script>

<style>

</style>