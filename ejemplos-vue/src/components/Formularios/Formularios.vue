<template>
  <div>
    <h2>Formularios</h2>
    <form @submit.prevent="guardarDatos">
      <fieldset>
        <legend>Datos de registro:</legend>
        <div>
          <label for="usuario">Usuario</label>
          <input type="text" id="usuario" name="usuario" v-model.trim="usuario">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" name="email" v-model.trim="email">
        </div>
      </fieldset>
      <fieldset>
        <legend>+ Información personal:</legend>
        <div>
          <label for="edad">Edad:</label>
          <input type="number" id="edad" name="edad" v-model.number="edad">
        </div>
        <div>
          <label for="pais">País</label>
          <select name="pais" id="pais" v-model="pais">
            <option value="es">España</option>
            <option value="it">Italia</option>
            <option value="fr">Francia</option>
          </select>
        </div>
        <div>
          <label for="hombre">
            <input type="radio" name="genero" id="hombre" value="hombre" v-model="genero">Hombre
          </label>
          <label for="mujer">
            <input type="radio" name="genero" id="mujer" value="mujer" v-model="genero">Mujer
          </label>
          <label for="no-binario">
            <input type="radio" name="genero" id="no-binario" value="no-binario" v-model="genero">No binario
          </label>
        </div>
      </fieldset>
      <fieldset>
        <legend>Dinos tus intereses para mostrar artículos sobre ellos:</legend>
        <div>
          <label for="vue">
            <input type="checkbox" name="intereses" id="vue" value="vue" v-model="intereses"> Vue
          </label>
          <label for="angular">
            <input type="checkbox" name="intereses" id="angular" value="angular" v-model="intereses"> Angular
          </label>
          <label for="react">
            <input type="checkbox" name="intereses" id="react" value="react" v-model="intereses"> React
          </label>
          <label for="svelte">
            <input type="checkbox" name="intereses" id="svelte" value="svelte" v-model="intereses"> Svelte
          </label>
        </div>
      </fieldset>
      <button type="submit">Registrate</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: 'a',
      email: 'a@a.es',
      pais: 'es',
      genero: 'no-binario',
      intereses: ['vue'],
      edad: null,
    }
  },
  methods: {
    guardarDatos(event) {
      // event.preventDefault();

      const datosRegistro = {
        usuario: this.usuario,
        email: this.email,
        pais: this.pais,
        genero: this.genero,
        intereses: this.intereses,
        // edad: Number(this.edad),
        edad: this.edad,
      }
      console.log(datosRegistro)
      console.log(datosRegistro.edad, typeof(datosRegistro.edad))
      // console.log(JSON.stringify(datosRegistro))
      // console.log('Data:', JSON.stringify(this.$data))

      // Aquí va la petición POST
    }
  }
}
</script>

<style>

</style>