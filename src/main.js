import './assets/main.css'

import { createApp } from 'vue'
// persistant state plugin for pinia (instalation: npm i pinia-plugin-persistedstate)
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// initialize Pinia
const pinia = createPinia();
// use persistance pinina plugin
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router)

app.mount('#app')
