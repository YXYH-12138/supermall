import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from "vue-lazyload"
import toast from "components/common/toast"

import "assets/iconfont/iconfont.js"

import fastclick from "fastclick"

//解决移动端300ms延迟
fastclick.attach(document.body)

Vue.use(toast)

Vue.use(VueLazyload)

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
