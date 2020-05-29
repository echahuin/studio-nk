import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { BootstrapVue, VBScrollspyPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ScrollAnimation from './directives/scrollanimation'

Vue.use(VBScrollspyPlugin)
Vue.directive('scrollanimation', ScrollAnimation)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
