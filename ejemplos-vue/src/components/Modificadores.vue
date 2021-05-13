<template>
  <div>
    <h2>Modificadores</h2>
    <p>Los modificadores de v-model (trim y number) están en el componente de Formularios</p>

    <div id="caja-fuera" @click="mostrarAlert('Has pulsado sobre la caja de fuera', $event)">
      <div id="caja-dentro" @click.stop="mostrarAlert('Has pulsado sobre la caja de dentro', $event)"></div>
    </div>

    <div id="caja-que-se-mueve" :style="{top: top+'px', left: left+'px'}">
      <input type="text" @keydown.right.left.up.down="moverCaja" @keyup.space="reiniciarPosicion">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      top: 0,
      left: 0
    }
  },
  methods: {
    mostrarAlert(msg, event) {
      // event.stopPropagation()
      console.log(event)
      alert(msg)
    },
    reiniciarPosicion() {
      this.top = 0;
      this.left = 0;
    },
    moverCaja(event) {
      // console.log(event);
      switch(event.code) {
        case 'ArrowRight':
          this.left += 5;
          break;
        case 'ArrowLeft':
          this.left -= 5;
          break;
        case 'ArrowDown':
          this.top += 5;
          break;
        case 'ArrowUp':
          this.top -= 5;
          break;
      }
    }
  }
}
</script>

<style scoped>
  #caja-fuera {
    width: 300px;
    height: 300px;
    border: 1px solid black;
    background-color: orange;
  }

  #caja-dentro {
    width: 150px;
    height: 150px;
    border: 1px solid black;
    background-color: blue;
  }

  #caja-que-se-mueve {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 1px solid black;
    background: hsla(0,0%,100%,.15);
    backdrop-filter: blur(3px);
  }

  #caja-que-se-mueve input {
    width: 42px;
  }
</style>