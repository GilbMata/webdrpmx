import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import anime from 'animejs/lib/anime.es.js';
import LottieVuePlayer from "@lottiefiles/vue-lottie-player";
import axios from 'axios'

window.anime = anime
window.axios = axios

Vue.use(VueHead, {
  separator: '|',
  complement: 'DRP'
})

Vue.use(LottieVuePlayer);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
