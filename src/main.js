import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import anime from 'animejs/lib/anime.es.js';
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import axios from 'axios'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

window.anime = anime
window.axios = axios

Vue.use(VueHead, {
  separator: '|',
  complement: 'DRP'
})

Vue.use(LottieVuePlayer);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
