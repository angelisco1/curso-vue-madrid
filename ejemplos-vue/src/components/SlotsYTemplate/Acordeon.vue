<template>
  <div class="acordeon">
    <div class="header" @click="toggleCerrado">
      <!-- <h3>{{titulo}}</h3> -->
      <slot name="title">
        <h3>{{estaCerrado ? '[+] Desplegar' : '[-] Colapsar'}}</h3>
      </slot>
    </div>
    <div :class="{content: true, cerrado: estaCerrado, abierto: !estaCerrado}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['titulo'],
  data() {
    return {
      estaCerrado: false
    }
  },
  methods: {
    toggleCerrado() {
      this.estaCerrado = !this.estaCerrado;
    }
  }
}
</script>

<style scoped>
  .acordeon {
    border: 1px solid black;
    border-radius: 10px;
    margin: 15px 0;
  }

  .header {
    padding-left: 20px;
    border-bottom: 1px solid black;
    cursor: pointer;
  }

  .content {
    overflow: hidden;
  }

  .content.cerrado {
    height: 0;
    padding: 3px;
  }

  .content.abierto {
    height: auto;
    padding: 15px;
  }
</style>