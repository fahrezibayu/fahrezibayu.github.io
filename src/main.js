import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueKinesis from "vue-kinesis";


import 'bootstrap/dist/css/bootstrap.css';
import '/src/assets/main.css';

var VueScrollTo = require('vue-scrollto');
const app = createApp(App);
app.use(store)
app.use(router)
app.use(VueKinesis);
app.use(VueScrollTo)
app.mount("#app");