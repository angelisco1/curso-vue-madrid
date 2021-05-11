import { createApp } from 'vue'
import App from './App.vue'
import ComponenteGlobal from './components/ComponenteGlobal';

// createApp(App).mount('#app');
const app = createApp(App);

app.component('cmp-global', ComponenteGlobal);
app.directive('marcar', {
  mounted(el, binding) {
    console.log(binding);
    const { bgColor: bgc, color } = binding.value;
    const delayed = binding.modifiers.delayed;

    el.addEventListener('mouseenter', () => {
      let timeout = 0;
      if (delayed) {
        timeout = 1000;
      }
      setTimeout(() => {
        el.style.backgroundColor = bgc;
        el.style.color = color;
      }, timeout)
    })

    el.addEventListener('mouseout', () => {
      el.style.backgroundColor = 'white';
      el.style.color = 'black';
    })
  }
})

app.mount('#app');