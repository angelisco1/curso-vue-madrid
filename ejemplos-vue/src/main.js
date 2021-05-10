import { createApp } from 'vue'
import App from './App.vue'
import ComponenteGlobal from './components/ComponenteGlobal';

// createApp(App).mount('#app');
const app = createApp(App);

app.component('cmp-global', ComponenteGlobal);

app.mount('#app');