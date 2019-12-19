// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Home from './components/Home'
import '@/assets/bootstrap.min.css'
import axios from 'axios'

Vue.prototype.myaxios=axios
Vue.prototype.HOST="/api"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App,Home },
  template: '<App/>'
})
