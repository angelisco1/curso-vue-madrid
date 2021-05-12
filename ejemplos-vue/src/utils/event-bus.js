import emitter from 'tiny-emitter/instance';

const on = (...args) => {
  emitter.on(...args)
}

const off = (nombreEvento, evento) => {
  emitter.off(nombreEvento, evento)
}

const emit = (nombreEvento, evento) => {
  emitter.emit(nombreEvento, evento)
}


export default {
  $on: on,
  $off: off,
  $emit: emit,
}

// Spread operator: pasa de una lista a valores individuales
// Rest operator: pasa valores individuales a una lista
// $on(1, 2, 3)
// args = [1, 2, 3]
// emitter.on(1, 2, 3)