import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.css'
import { VueMaskDirective } from 'vue-the-mask'
import VueTheMask from 'vue-the-mask'

const app = createApp(App)
app.directive('mask', VueMaskDirective);
app.use(router);
app.use(VueTheMask);
app.mount('#app')
